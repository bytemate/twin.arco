import { defineConfig } from 'vite-plugin-windicss'
import { extend } from '../dist/index'

export default defineConfig({
  extract: {
    include: ['.vitepress/theme/**/*.{ts,vue}'],
  },
  theme: {
    extend: {
      screens: {
        '2xl': '1400px',
      },
      colors: extend.colors,
    },
  },
})
