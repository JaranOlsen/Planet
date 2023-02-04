import { defineConfig } from 'vite'
import vitePluginString from 'vite-plugin-string'
import { resolve } from 'path'

export default defineConfig({
  assetsInclude: ['models/*.glb', 'img/*.png'],
  base: '/Planet/',
  root: "./",
  plugins: [
    vitePluginString(), //changed from vitePluginString.default()
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve('index.html'),
        planet: resolve('planet.html'),
        planet_lowperf: resolve('planet_lowperf.html'),
        planet_dev: resolve('planet_dev.html'),
      },
    },
  },
})