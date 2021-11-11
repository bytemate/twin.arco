import { join } from 'path';
import { src, dest } from 'gulp';
import less from 'gulp-less';
import cleanCSS from 'gulp-clean-css';
import postcss from 'gulp-postcss';
import { filterArco } from './filter-process';
import { typescriptify } from './typescriptify-process';

export function arco(cb: () => void) {
  src(join(__dirname, '../index.less'))
    .pipe(less({ relativeUrls: true, paths: ['node_modules'] }))
    .pipe(cleanCSS({ format: 'beautify' }))
    .pipe(postcss([filterArco()]))
    .pipe(typescriptify())
    .pipe(dest(join(__dirname, '../')));
  cb();
}
