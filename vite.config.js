import { defineConfig } from 'vite'
import vitePluginString from 'vite-plugin-string'

export default defineConfig({
  assetsInclude: ['models/*.glb'],
  base: '/Planet/',
  root: "./",
  plugins: [
    vitePluginString.default(),
  ]
})