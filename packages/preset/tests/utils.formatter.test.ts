import { theme, palette } from '@twin.arco/colors';
import {
  cssRgb,
  normalizeCssVariable,
  cssRgba,
  cssVar,
  defaultKeyFormatter,
} from '@/utils';

describe('Utils formatter', () => {
  test('normalCssVariable', () => {
    expect(normalizeCssVariable('--red-1')).toBe('red-1');
  });

  test('cssVar', () => {
    expect(cssVar('--red-1')).toBe('var(--red-1)');
    expect(cssVar('--red-1', 'red')).toBe('var(--red-1, red)');
  });

  test('cssRgb', () => {
    expect(cssRgb('test')).toBe('rgb(test)');
  });

  test('cssRgba', () => {
    expect(cssRgba('test')).toBe('rgba(test, 1)');
    expect(cssRgba('test', 0.5)).toBe('rgba(test, 0.5)');
  });

  test('defaultKeyFormatter', () => {
    theme.forEach(key => {
      expect(defaultKeyFormatter(key)).toMatchSnapshot();
    });

    palette.forEach(key => {
      expect(defaultKeyFormatter(key)).toMatchSnapshot();
    });
  });
});
