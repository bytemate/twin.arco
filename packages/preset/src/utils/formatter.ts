import type {
  PaletteCssName,
  PlainVariable,
  ThemeCssName,
} from '@twin.arco/colors';

/**
 * remove `--` from the beginning of a string
 */
export function normalizeCssVariable<T extends `--${string}`>(
  variable: T,
): PlainVariable<T> {
  return variable.substr(2) as PlainVariable<T>;
}

/**
 * wrap `var()` for css variable name
 */
export function cssVar(
  variable: `--${string}`,
  defaultValue?: string,
): `var(${string})` {
  if (defaultValue !== undefined) {
    return `var(${variable}, ${defaultValue})`;
  } else {
    return `var(${variable})`;
  }
}

/**
 * wrap `rgb()` for like in css
 */
export function cssRgb(value: string): `rgb(${string})` {
  return `rgb(${value})`;
}

/**
 * wrap `rgba()` for like in css
 */
export function cssRgba(
  rgb: string,
  opacity?: number | string,
): `rgba(${string})` {
  if (opacity) {
    return `rgba(${rgb}, ${opacity})`;
  } else {
    return `rgba(${rgb}, 1)`;
  }
}

export function defaultKeyFormatter(
  key: ThemeCssName | PaletteCssName | `--${string}`,
): string {
  let _key: `--${string}` = key;
  if (key.startsWith('--color')) {
    _key = key.replace('--color', '--arco') as `--${string}`;
  }
  return normalizeCssVariable(_key);
}
