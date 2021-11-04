const { Buffer } = require('buffer');
const through2 = require('through2');
const PluginError = require('plugin-error');
const postcss = require('postcss');
const postcssJs = require('postcss-js');

module.exports = () => {
  return through2.obj(function (file, enc, cb) {
    if (file.isNull()) {
      return cb(null, file);
    }

    if (file.isStream()) {
      this.emit(
        'error',
        new PluginError('gulp-css-to-json', 'Streaming not supported!'),
      );
      return cb(null, file);
    }
    try {
      const root = postcss.parse(file.contents.toString());
      const jsStyle = postcssJs.objectify(root);
      file.contents = Buffer.from(`${JSON.stringify(jsStyle, null, 2)}\n`);
      file.extname = '.json';
    } catch (error) {
      this.emit('error', new PluginError('gulp-css-to-json', error));
    }
    return cb(null, file);
  });
};
