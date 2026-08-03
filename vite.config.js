import { defineConfig } from 'vite'
import vitePluginString from 'vite-plugin-string'
import { parse } from '@babel/parser'
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'path'

const mindmapSaveTargets = {
  planet: { file: 'src/js/data/planetData.js', prefix: 'planet', imageFile: 'src/js/data/planetImageData.js', imageExport: 'planetImageData' },
  full: { file: 'src/js/data/planetData.js', prefix: 'planet', imageFile: 'src/js/data/planetImageData.js', imageExport: 'planetImageData' },
  simple: { file: 'src/js/data/planetSimpleData.js', prefix: 'planet', imageFile: 'src/js/data/planetSimpleImageData.js', imageExport: 'planetImageData' },
  compass: { file: 'src/js/data/planetCompassData.js', prefix: 'planet', imageFile: 'src/js/data/planetCompassImageData.js', imageExport: 'planetImageData' },
  spiral: { file: 'src/js/data/spiralData.js', prefix: 'spiral', imageFile: 'src/js/data/spiralImageData.js', imageExport: 'spiralImageData' },
  enneagram: { file: 'src/js/data/enneagramData.js', prefix: 'enneagram' },
}

function requiredMindmapExports(prefix) {
  return [
    `${prefix}TagData`,
    `${prefix}Connections`,
    `${prefix}ArrowedConnections`,
    `${prefix}DashedConnections`,
    `${prefix}TunnelConnections`,
  ]
}

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

function validateMindmapDataSource(source, prefix) {
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

  const missing = requiredMindmapExports(prefix).filter((name) => !exportedNames.has(name))
  if (missing.length > 0) {
    throw new Error(`Generated data is missing exports: ${missing.join(', ')}`)
  }
}

function updateMindmapImageSource(source, exportName, images) {
  if (!Array.isArray(images) || images.length === 0) return source
  const ast = parse(source, { sourceType: 'module' })
  let imageArray = null

  ast.program.body.forEach((node) => {
    if (node.type !== 'ExportNamedDeclaration' || node.declaration?.type !== 'VariableDeclaration') return
    node.declaration.declarations.forEach((declaration) => {
      if (declaration.id?.name === exportName && declaration.init?.type === 'ArrayExpression') imageArray = declaration.init
    })
  })
  if (!imageArray) throw new Error(`Generated image data is missing export: ${exportName}`)

  const updatesById = new Map(images.filter((image) => image?.id).map((image) => [String(image.id), image]))
  const replacements = []
  const updatedIds = new Set()
  const propertyName = (property) => property?.key?.name || property?.key?.value

  imageArray.elements.forEach((element) => {
    if (element?.type !== 'ObjectExpression') return
    const idProperty = element.properties.find((property) => propertyName(property) === 'id')
    const id = idProperty?.value?.value
    const update = updatesById.get(String(id))
    if (!update) return
    updatedIds.add(String(id))
    element.properties.forEach((property) => {
      const key = propertyName(property)
      if (!['lat', 'lng', 'size', 'radius'].includes(key) || update[key] === undefined) return
      replacements.push({ start: property.value.start, end: property.value.end, value: JSON.stringify(update[key]) })
    })
  })

  const missing = [...updatesById.keys()].filter((id) => !updatedIds.has(id))
  if (missing.length) throw new Error(`Image data contains unknown ids: ${missing.join(', ')}`)
  replacements.sort((left, right) => right.start - left.start)
  return replacements.reduce(
    (result, replacement) => `${result.slice(0, replacement.start)}${replacement.value}${result.slice(replacement.end)}`,
    source,
  )
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
          const target = mindmapSaveTargets[datasetKey]

          if (!target) {
            sendJson(res, 400, { error: `No save target is configured for dataset "${body.dataset || 'unknown'}".` })
            return
          }

          if (typeof body.source !== 'string' || body.source.length === 0) {
            sendJson(res, 400, { error: 'Missing generated mindmap data source.' })
            return
          }

          validateMindmapDataSource(body.source, target.prefix)

          let imageSource = null
          if (target.imageFile && Array.isArray(body.images) && body.images.length > 0) {
            imageSource = updateMindmapImageSource(
              await readFile(resolve(__dirname, target.imageFile), 'utf8'),
              target.imageExport,
              body.images,
            )
            parse(imageSource, { sourceType: 'module' })
          }

          if (!body.dryRun) {
            await writeFile(resolve(__dirname, target.file), body.source.endsWith('\n') ? body.source : `${body.source}\n`, 'utf8')
            if (imageSource !== null) {
              await writeFile(resolve(__dirname, target.imageFile), imageSource.endsWith('\n') ? imageSource : `${imageSource}\n`, 'utf8')
            }
          }

          sendJson(res, 200, {
            ok: true,
            dryRun: Boolean(body.dryRun),
            file: target.file,
            imageFile: imageSource !== null ? target.imageFile : null,
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
