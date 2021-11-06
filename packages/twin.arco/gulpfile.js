const { join } = require('path');
const { src, dest } = require('gulp');
const less = require('gulp-less');
const cleanCss = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const cssToJson = require('./plugins/gulp-css-to-json');
const arcoTheme = require('./plugins/postcss-arco-theme');

// read arco theme then converter to json
function arco(cb) {
  src('./src/css/*.less')
    .pipe(less({ relativeUrls: true, paths: ['node_modules'] }))
    .pipe(cleanCss({ format: 'beautify' }))
    .pipe(postcss([arcoTheme()]))
    .pipe(cssToJson())
    .pipe(dest(join(__dirname, './src/css')));
  cb();
}

exports.arco = arco;
