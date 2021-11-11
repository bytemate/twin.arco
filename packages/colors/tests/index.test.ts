import { theme, palette } from '@/index';

describe('Arco theme snapshot', () => {
  test('Theme snapshot', () => {
    expect(theme).toMatchSnapshot();
  });

  test('Palette snapshot', () => {
    expect(palette).toMatchSnapshot();
  });
});
