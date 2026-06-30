import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import WebSocket from 'ws';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const deckRoot = path.join(repoRoot, 'Public/assets/slides/decks');
const appUrl = process.env.SLIDE_FIT_URL || process.argv[2] || 'http://127.0.0.1:4174/Planet/';
const deckArg = process.env.SLIDE_FIT_DECK || process.argv[3] || '';
const deckPaths = deckArg
  ? deckArg.split(',').map((entry) => normaliseDeckPath(entry.trim())).filter(Boolean)
  : listDeckPaths();
const port = Number(process.env.SLIDE_FIT_CDP_PORT || 9333);

async function main() {
  const chromePath = findChrome();
  if (!chromePath) {
    console.error('No Chrome or Chromium executable found. Set CHROME_PATH to run frame-fit checks.');
    process.exit(1);
  }

  const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'planet-slide-fit-'));
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--enable-webgl',
    '--ignore-gpu-blocklist',
    '--enable-unsafe-swiftshader',
    '--use-gl=swiftshader',
    '--no-first-run',
    '--no-default-browser-check',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    'about:blank',
  ], {
    stdio: ['ignore', 'ignore', 'pipe'],
  });

  let chromeStderr = '';
  chrome.stderr.on('data', (chunk) => {
    chromeStderr = `${chromeStderr}${chunk.toString()}`.slice(-4000);
  });

  try {
    const browserWsUrl = await waitForBrowserWsUrl(port);
    const cdp = await CdpClient.connect(browserWsUrl);
    const browserMessages = [];
    cdp.on('Runtime.exceptionThrown', (params) => {
      const detail = params.exceptionDetails || {};
      browserMessages.push(`exception: ${detail.text || ''} ${detail.exception?.description || ''}`.trim());
    });
    cdp.on('Runtime.consoleAPICalled', (params) => {
      const args = (params.args || []).map((arg) => arg.value ?? arg.description ?? '').join(' ');
      browserMessages.push(`console.${params.type}: ${args}`.trim());
    });
    cdp.on('Log.entryAdded', (params) => {
      const entry = params.entry || {};
      browserMessages.push(`log.${entry.level || 'info'}: ${entry.text || ''}`.trim());
    });
    const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });
    await cdp.send('Network.enable', {}, sessionId);
    await cdp.send('Network.setBlockedURLs', {
      urls: [
        'https://ajax.googleapis.com/*',
        'https://d3js.org/*',
        'https://unpkg.com/*',
      ],
    }, sessionId);
    await cdp.send('Log.enable', {}, sessionId);
    await cdp.send('Page.enable', {}, sessionId);
    await cdp.send('Runtime.enable', {}, sessionId);
    await cdp.send('Page.navigate', { url: appUrl }, sessionId);
    await waitForExpression(cdp, sessionId, 'Boolean(window.slideLab)', browserMessages);

    const diagnostics = await evaluate(cdp, sessionId, fitCheckExpression(deckPaths));
    const overflowing = diagnostics.filter((item) => item.overflow);

    diagnostics.forEach((item) => {
      const status = item.overflow ? 'OVERFLOW' : 'fits';
      console.log(`${status}: ${item.deckId} / ${item.theme} / ${item.template} / ${item.title || 'untitled'} (${item.width}x${item.height}, scroll ${item.scrollWidth}x${item.scrollHeight})`);
    });

    if (overflowing.length > 0) {
      console.error(`${overflowing.length} structured slide(s) overflow the frame.`);
      process.exitCode = 1;
    }

    await cdp.close();
  } finally {
    if (process.exitCode && chromeStderr) {
      console.error(chromeStderr);
    }
    chrome.kill('SIGTERM');
    await Promise.race([
      new Promise((resolve) => chrome.once('exit', resolve)),
      delay(750),
    ]);
    try {
      fs.rmSync(userDataDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
    } catch (error) {
      console.warn(`Unable to remove temporary Chrome profile: ${error.message}`);
    }
  }
}

function fitCheckExpression(decks) {
  return `
    (async () => {
      const deckPaths = ${JSON.stringify(decks)};
      const flatten = (items) => items.flatMap((item) => Array.isArray(item) ? flatten(item) : [item]);
      const results = [];
      for (const deckPath of deckPaths) {
        const response = await fetch(new URL(deckPath, location.href));
        if (!response.ok) throw new Error('Unable to load deck for fit check: ' + deckPath + ' ' + response.status);
        const deck = await response.json();
        const slides = flatten(deck.slides || []);
        for (const slide of slides) {
          const theme = slide.theme || deck.theme || deck.path || 'aether';
          const path = slide.path || deck.path;
          await window.slideLab.previewDeck({
            id: 'fit-' + (deck.id || deckPath),
            title: 'Fit check',
            theme,
            path,
            slides: [slide],
          });
          await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
          results.push({
            ...(window.slideLab.getDiagnostics() || {}),
            deckId: deck.id || deckPath,
            deckPath,
            theme,
            path: path || '',
            template: slide.template || 'unknown',
            title: slide.title || slide.template,
          });
        }
      }
      return results;
    })()
  `;
}

function listDeckPaths() {
  if (!fs.existsSync(deckRoot)) return [];
  return fs.readdirSync(deckRoot)
    .filter((entry) => entry.endsWith('.json'))
    .sort()
    .map((entry) => `assets/slides/decks/${entry}`);
}

function normaliseDeckPath(deck) {
  if (deck.startsWith('assets/')) return deck;
  if (deck.startsWith('/')) return deck.replace(/^\/+/, '');
  return `assets/slides/decks/${deck.replace(/\.json$/, '')}.json`;
}

async function evaluate(cdp, sessionId, expression) {
  const response = await cdp.send('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true,
  }, sessionId);

  if (response.exceptionDetails) {
    throw new Error(response.exceptionDetails.text || 'Runtime.evaluate failed');
  }

  return response.result.value;
}

async function waitForExpression(cdp, sessionId, expression, browserMessages = []) {
  const deadline = Date.now() + 15000;
  while (Date.now() < deadline) {
    const result = await evaluate(cdp, sessionId, expression);
    if (result) return;
    await delay(150);
  }
  let debugState = {};
  try {
    debugState = await evaluate(cdp, sessionId, `({
      href: location.href,
      readyState: document.readyState,
      appStatus: window.appStatus,
      slideLabType: typeof window.slideLab,
      scripts: Array.from(document.scripts).map((script) => script.src || '[inline]'),
      bodyText: document.body ? document.body.innerText.slice(0, 240) : '',
      browserMessages: ${JSON.stringify(browserMessages)}
    })`);
  } catch (error) {
    debugState = { error: error.message };
  }
  throw new Error(`Timed out waiting for expression: ${expression}\n${JSON.stringify(debugState, null, 2)}`);
}

async function waitForBrowserWsUrl(cdpPort) {
  const deadline = Date.now() + 10000;
  const url = `http://127.0.0.1:${cdpPort}/json/version`;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const payload = await response.json();
        if (payload.webSocketDebuggerUrl) return payload.webSocketDebuggerUrl;
      }
    } catch {}
    await delay(100);
  }
  throw new Error('Timed out waiting for Chrome DevTools Protocol.');
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean);

  return candidates.find((candidate) => fs.existsSync(candidate));
}

class CdpClient {
  constructor(ws) {
    this.ws = ws;
    this.id = 1;
    this.pending = new Map();
    this.listeners = new Map();
    this.ws.on('message', (message) => this.handleMessage(message));
  }

  static connect(wsUrl) {
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(wsUrl);
      ws.once('open', () => resolve(new CdpClient(ws)));
      ws.once('error', reject);
    });
  }

  send(method, params = {}, sessionId) {
    const id = this.id;
    this.id += 1;
    const message = { id, method, params };
    if (sessionId) message.sessionId = sessionId;

    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify(message));
    });
  }

  handleMessage(rawMessage) {
    const message = JSON.parse(rawMessage.toString());
    if (message.method) {
      const listeners = this.listeners.get(message.method) || [];
      listeners.forEach((listener) => listener(message.params || {}, message.sessionId));
    }
    if (!message.id || !this.pending.has(message.id)) return;

    const pending = this.pending.get(message.id);
    this.pending.delete(message.id);
    if (message.error) {
      pending.reject(new Error(message.error.message));
    } else {
      pending.resolve(message.result || {});
    }
  }

  close() {
    if (this.ws.readyState === WebSocket.CLOSED) return Promise.resolve();
    return new Promise((resolve) => {
      const timeout = setTimeout(resolve, 500);
      timeout.unref?.();
      this.ws.once('close', () => {
        clearTimeout(timeout);
        resolve();
      });
      this.ws.close();
    });
  }

  on(method, listener) {
    const listeners = this.listeners.get(method) || [];
    listeners.push(listener);
    this.listeners.set(method, listeners);
  }
}

await main();
