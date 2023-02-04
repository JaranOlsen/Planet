import { defineConfig } from 'vite'
import vitePluginString from 'vite-plugin-string'
import { resolve } from 'path'

export default defineConfig({
  assetsInclude: ['models/*.glb', 'img/anomalies/biology/*.jpeg', 'img/consciousness/*.webp', 'img/emotion/*.jpg', 'img/exercises/awareness1/*.jpeg', 'img/exercises/experience1/*.jpeg', 'img/exercises/experience2/*.jpeg', 'img/exercises/open1/*.jpeg', 'img/exercises/sixsenses/*.jpeg', 'img/mindmaps/*.png', 'img/ontology/*.jpeg', 'img/truth/*.jpeg'],
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