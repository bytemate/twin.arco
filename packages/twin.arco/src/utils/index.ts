import type { PlainVariable } from '@twin.arco/colors';

export function normalizeCSSVariable<T extends `--${string}`>(
  variable: T,
): PlainVariable<T> {
  return variable.substr(2) as PlainVariable<T>;
}
