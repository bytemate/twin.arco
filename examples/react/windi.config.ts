import { defineConfig } from 'windicss/helpers';
import { preset } from 'twin.arco';

export default defineConfig({
  presets: [preset({ darkMode: 'windicss' })],
  extract: {
    // A common use case is scanning files from the root directory
    include: [
      './config/html/**/*.html',
      './config/html/**/*.ejs',
      './config/html/**/*.hbs',
      './src/**/*',
    ],
    // if you are excluding files, make sure you always include node_modules and .git
    exclude: ['node_modules', '.git', 'dist'],
  },
});
