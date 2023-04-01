import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  assetsInclude: ['models/*.glb'],
  base: '/Planet/',
  root: "./",
  plugins: [
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        index: resolve('index.html'),
      },
    },
  },
})