import { defineConfig } from '@modern-js/app-tools';
import ArcoWebpackPlugin from '@arco-design/webpack-plugin';
import WindiWebpackPlugin from 'windicss-webpack-plugin';

export default defineConfig({
  runtime: {
    state: true,
    router: true,
  },
  source: {
    moduleScopes: [
      'virtual:windi.css',
      'virtual:windi-base.css',
      'virtual:windi-utilities.css',
      'virtual:windi-components.css',
    ],
  },
  tools: {
    webpack: (config, { chain }) => {
      chain.plugin('arco').use(ArcoWebpackPlugin);
      chain.plugin('windi').use(WindiWebpackPlugin);
    },
  },
});
