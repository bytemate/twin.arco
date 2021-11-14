import { palette, PaletteName, theme, ThemeName } from '@twin.arco/colors';
import {
  cssRgb,
  cssRgba,
  cssVar,
  defaultKeyFormatter,
  normalizeCssVariable,
} from './formatter';

export const themeKeys: ThemeName[] = theme.map(normalizeCssVariable);

export const paletteKeys: PaletteName[] = palette.map(normalizeCssVariable);

export function createTheme(
  formatter: (value: `--${string}`) => string = defaultKeyFormatter,
) {
  return theme.reduce((colors, key) => {
    const _key = formatter(key);
    colors[_key] = cssRgb(cssVar(key));
    return colors;
  }, {} as Record<string, any>);
}

export function createPalette(
  opacity = true,
  formatter: (value: `--${string}`) => string = defaultKeyFormatter,
) {
  return palette.reduce((colors, key) => {
    const _key = formatter(key);
    if (!opacity) {
      colors[_key] = cssRgb(cssVar(key));
    } else {
      colors[_key] = colorWithOpacity(cssVar(key));
    }
    return colors;
  }, {} as Record<string, any>);
}

export function colorWithOpacity(key: string) {
  return ({ opacityVariable }: { [key: string]: string }) =>
    cssRgba(key, cssVar(opacityVariable as `--${string}`, '1'));
}
