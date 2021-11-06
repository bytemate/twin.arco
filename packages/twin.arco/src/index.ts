import css from './css/theme.json';
import { generateColor, generateExtendColors } from './utils';

export const arcoPalette = generateColor(Object.keys((<any>css).palette), {
  opacity: true,
});
export const arcoTheme = generateColor(Object.keys((<any>css).theme), {
  arcoTheme: true,
});
export const extend = generateExtendColors({ ...arcoPalette, ...arcoTheme });
