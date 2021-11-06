import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import ViteRestart from 'vite-plugin-restart'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          windicss: ['windicss'],
        },
      },
    },
  },
  plugins: [
    WindiCSS(),
    ViteRestart({
      restart: '.vitepress/config/*.*',
    }),
  ],
  optimizeDeps: {
    include: ['windicss/utils/style', 'windicss'],
  },
})
