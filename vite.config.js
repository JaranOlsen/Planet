import { defineConfig } from 'vite'
import vitePluginString from 'vite-plugin-string'
import { resolve } from 'path'

export default defineConfig({
  assetsInclude: ['src/models/*.glb'],
  base: '/Planet/',
  root: "./",
  publicDir: 'Public',
  plugins: [
    vitePluginString(), //changed from vitePluginString.default()
  ],
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        deliberatepractice: resolve(__dirname, 'deliberatepractice/index.html'),
      },
    },
  },
})
