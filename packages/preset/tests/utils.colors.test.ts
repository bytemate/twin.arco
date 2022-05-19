import { themeKeys, paletteKeys, colorWithOpacity } from '@/utils/colors';

describe('Colors', () => {
  test('theme should match snapshot', () => {
    expect(themeKeys).toMatchSnapshot();
  });

  test('palette should match snapshot', () => {
    expect(paletteKeys).toMatchSnapshot();
  });

  test('colorWithOpacity', () => {
    expect(
      colorWithOpacity('var(--color-red-6)')({
        opacityVariable: '--tw-text-opacity',
        opacityValue: '0.1',
      }),
    ).toBe('rgba(var(--color-red-6), var(--tw-text-opacity, 1))');

    expect(
      colorWithOpacity('var(--color-red-6)')({
        opacityValue: '0.1',
      }),
    ).toBe('rgba(var(--color-red-6), 0.1)');

    // fallback
    expect(colorWithOpacity('var(--color-red-6)')({})).toBe(
      'rgba(var(--color-red-6), 1)',
    );
  });
});
