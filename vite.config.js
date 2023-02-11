import { defineConfig } from 'vite'
import vitePluginString from 'vite-plugin-string'
import { resolve } from 'path'

export default defineConfig({
  assetsInclude: ['models/*.glb'],
  base: '/Planet/',
  root: "./",
  plugins: [
    vitePluginString(), //changed from vitePluginString.default()
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve('index.html'),
      },
    },
  },
})