import { defineConfig } from 'vite'
import vitePluginString from 'vite-plugin-string'
import { parse } from '@babel/parser'
import { writeFile } from 'node:fs/promises'
import { resolve } from 'path'

const mindmapSaveTargets = {
  planet: 'src/js/data/planetData.js',
  full: 'src/js/data/planetData.js',
  simple: 'src/js/data/planetSimpleData.js',
}

const requiredMindmapExports = [
  'planetTagData',
  'planetConnections',
  'planetArrowedConnections',
  'planetDashedConnections',
  'planetTunnelConnections',
]

function sendJson(res, status, payload) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(payload))
}

function readJsonBody(req, maxBytes = 5 * 1024 * 1024) {
  return new Promise((resolveBody, rejectBody) => {
    let body = ''

    req.on('data', (chunk) => {
      body += chunk
      if (body.length > maxBytes) {
        rejectBody(new Error('Request body is too large.'))
        req.destroy()
      }
    })

    req.on('end', () => {
      try {
        resolveBody(JSON.parse(body || '{}'))
      } catch {
        rejectBody(new Error('Request body must be valid JSON.'))
      }
    })

    req.on('error', rejectBody)
  })
}

function validateMindmapDataSource(source) {
  const ast = parse(source, { sourceType: 'module' })
  const exportedNames = new Set()

  ast.program.body.forEach((node) => {
    if (node.type !== 'ExportNamedDeclaration') return
    if (node.declaration?.type !== 'VariableDeclaration') return

    node.declaration.declarations.forEach((declaration) => {
      if (declaration.id?.type === 'Identifier') {
        exportedNames.add(declaration.id.name)
      }
    })
  })

  const missing = requiredMindmapExports.filter((name) => !exportedNames.has(name))
  if (missing.length > 0) {
    throw new Error(`Generated data is missing exports: ${missing.join(', ')}`)
  }
}

function mindmapSavePlugin() {
  return {
    name: 'planet-mindmap-save',
    configureServer(server) {
      server.middlewares.use('/__planet-dev/save-mindmap', async (req, res) => {
        if (req.method !== 'POST') {
          sendJson(res, 405, { error: 'Use POST to save mindmap data.' })
          return
        }

        try {
          const body = await readJsonBody(req)
          const datasetKey = String(body.dataset || '').trim().toLowerCase()
          const targetFile = mindmapSaveTargets[datasetKey]

          if (!targetFile) {
            sendJson(res, 400, { error: `No save target is configured for dataset "${body.dataset || 'unknown'}".` })
            return
          }

          if (typeof body.source !== 'string' || body.source.length === 0) {
            sendJson(res, 400, { error: 'Missing generated mindmap data source.' })
            return
          }

          validateMindmapDataSource(body.source)

          if (!body.dryRun) {
            await writeFile(resolve(__dirname, targetFile), body.source.endsWith('\n') ? body.source : `${body.source}\n`, 'utf8')
          }

          sendJson(res, 200, {
            ok: true,
            dryRun: Boolean(body.dryRun),
            file: targetFile,
          })
        } catch (error) {
          sendJson(res, 400, { error: error instanceof Error ? error.message : String(error) })
        }
      })
    },
  }
}

export default defineConfig({
  assetsInclude: ['src/models/*.glb'],
  base: '/Planet/',
  root: "./",
  publicDir: 'Public',
  plugins: [
    {
      name: 'force-full-reload',
      handleHotUpdate({ server }) {
        server.ws.send({ type: 'full-reload' });
        return [];
      },
    },
    mindmapSavePlugin(),
    vitePluginString(), //changed from vitePluginString.default()
  ],
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
      },
    },
  },
})
