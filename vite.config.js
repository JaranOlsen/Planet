import { defineConfig } from 'vite'
import vitePluginString from 'vite-plugin-string'

export default defineConfig({
  base: '/Planet/',
  root: "./",
  plugins: [
    vitePluginString.default(),
  ]
})