import { resolve } from 'path'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import WindiCSS from 'vite-plugin-windicss'
import ViteRestart from 'vite-plugin-restart'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, '.vitepress/theme')}/`,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          windicss: ['windicss'],
        },
      },
    },
  },
  server: {
    proxy: {
      '/.netlify': {
        target: 'http://localhost:8888',
      },
    },
  },
  plugins: [
    Components({
      dirs: ['.vitepress/theme/components'],
      extensions: ['vue', 'ts'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
      dts: true,
    }),
    Icons(),
    WindiCSS(),
    ViteRestart({
      restart: ['.vitepress/config/*.*'],
    }),
  ],
  optimizeDeps: {
    include: [
      'axios',
      '@vueuse/core',
      'windicss/utils/style',
      'windicss',
      'json5',
      'prismjs',
      'prismjs/components/prism-css',
      'codemirror',
      'codemirror/mode/javascript/javascript',
      'codemirror/mode/css/css',
    ],
  },
})
