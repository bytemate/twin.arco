import { join } from 'path';
import { src, dest } from 'gulp';
import less from 'gulp-less';
import cleanCSS from 'gulp-clean-css';

export function arco(cb: () => void) {
  src(join(__dirname, '../index.less'))
    .pipe(less({ relativeUrls: true, paths: ['node_modules'] }))
    .pipe(cleanCSS({ format: 'beautify' }))
    .pipe(dest(join(__dirname, '../')));
  cb();
}
