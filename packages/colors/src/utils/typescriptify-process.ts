/* eslint-disable @babel/no-invalid-this */
import through2 from 'through2';
import PluginError from 'plugin-error';
import postcss from 'postcss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import postcssJs from 'postcss-js';
import { GenerateColor } from './generate-colors-file';

const PLUGIN_NAME = 'gulp-javascriptify';

export function typescriptify() {
  return through2.obj(async function (file, enc, cb) {
    if (file.isNull()) {
      return cb(null, file);
    }

    if (file.isStream()) {
      this.emit(
        'error',
        new PluginError(PLUGIN_NAME, 'Streaming not supported!'),
      );
      return cb(null, file);
    }

    try {
      const root = postcss.parse(file.contents.toString());
      const { theme, palette } = postcssJs.objectify(root);
      const generator = new GenerateColor({ theme, palette });
      await generator.create();
      //   file.contents = Buffer.from(`${JSON.stringify(obj, null, 2)}\n`);
      //   file.extname = '.json';
    } catch (error: any) {
      this.emit('error', new PluginError(PLUGIN_NAME, error));
    }

    return cb(null, null);
  });
}

/* eslint-enable @babel/no-invalid-this */
