import { defineConfig } from 'vite-plugin-windicss'
import { extend } from './dist/index'

export default defineConfig({
  theme: {
    extend: {
      screens: {
        '2xl': '1400px',
      },
      colors: extend.colors,
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: '#48B0F1',
              textDecoration: 'none',
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
            pre: { color: 'inherit', fontSize: '.9rem' },
            thead: { color: 'inherit' },
            blockquote: { color: 'inherit' },
            table: {
              borderCollapse: 'collapse',
            },
          },
        },
      },
    },
  },
})
