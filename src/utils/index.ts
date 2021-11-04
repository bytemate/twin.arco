export type PlainObject<T> = { [key: string]: T };

export type TailwindColor = PlainObject<string | ((...args: any[]) => any)>;

/**
 * wrapper colors property for tailwind css
 */
export function generateExtendColors(colors: TailwindColor) {
  return {
    colors,
  };
}

/**
 * @param keys - css variable list
 * @param opacity - can be transparent with rgba
 * @returns tailwind colors
 */
export function generateColor(
  keys: string[],
  {
    opacity = false,
    arcoTheme = false,
  }: { opacity?: boolean; arcoTheme?: boolean } = {},
): TailwindColor {
  return keys.reduce((obj, key) => {
    const name = arcoTheme
      ? key.replace('--color', 'arco')
      : normalizeCSSVariable(key);
    if (arcoTheme) {
      obj[name] = cssVariable(key);
    } else if (opacity) {
      obj[name] = rgbaCSSVariable(key);
    } else {
      obj[name] = rgbCSSVariable(key);
    }
    return obj;
  }, {} as TailwindColor);
}

export function cssVariable(variable: string): string {
  return `var(${variable})`;
}

/**
 * @param variable - CSS Variable Name
 * @returns A RGB CSS color value
 *
 * @example --red-1 = 123,123,123
 * rgbCSSVariables('--red-1') // output rgb(var(--red-1))
 */
export function rgbCSSVariable(variable: string): string {
  return `rgb(${cssVariable(variable)})`;
}

/**
 * @param variable - CSS Variable Name
 * @returns A RGBA CSS color value for tailwind color configuration
 * @link https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo
 */
export function rgbaCSSVariable(variable: string) {
  return ({ opacityVariable }: { [key: string]: string }) => {
    if (opacityVariable !== undefined) {
      return `rgba(${cssVariable(variable)}, var(${opacityVariable}, 1))`;
    }
    return rgbCSSVariable(variable);
  };
}

export function normalizeCSSVariable(variable: string): string {
  if (variable.startsWith('--')) {
    return variable.substr(2);
  }
  return variable;
}
