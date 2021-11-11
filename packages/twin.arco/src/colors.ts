import { theme, palette, ThemeName, PaletteName } from '@twin.arco/colors';
import { normalizeCSSVariable } from './utils';

export const themeKeys: ThemeName[] = theme.map(normalizeCSSVariable);

export const paletteKeys: PaletteName[] = palette.map(normalizeCSSVariable);
