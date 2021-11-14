import { themeKeys, paletteKeys } from '@/utils/colors';

describe('Colors', () => {
  test('theme should match snapshot', () => {
    expect(themeKeys).toMatchSnapshot();
  });

  test('palette should match snapshot', () => {
    expect(paletteKeys).toMatchSnapshot();
  });
});
