import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import ViteRestart from 'vite-plugin-restart'
import WindiCSS from 'vite-plugin-windicss'
import Vue from '@vitejs/plugin-vue'

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
    Vue(),
    Components({
      dirs: ['.vitepress/theme/components'],
      extensions: ['vue', 'ts'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: true,
    }),
    WindiCSS(),
    ViteRestart({
      restart: '.vitepress/config/*.*',
    }),
  ],
})
