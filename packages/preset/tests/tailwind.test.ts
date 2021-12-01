import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import preset from '@/index';

describe('Twin.arco preset for tailwind', () => {
  test('TailwindCSS preset', async () => {
    const processor = postcss([
      tailwindcss({
        presets: [preset()],
        theme: {},
        darkMode: 'class',
        content: [
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          {
            raw: '<div class="text-red-1 bg-red-1 border-red-1 text-arco-text-1 bg-arco-bg-1 border-arco-border-1"></div>',
          },
        ],
      }),
    ]);

    const result = await processor.process(String.raw`@tailwind utilities;`, {
      from: undefined,
    });

    expect(result.css).toMatchSnapshot();
  });
});
