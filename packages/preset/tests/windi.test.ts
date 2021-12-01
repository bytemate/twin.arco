import { Processor } from 'windicss/lib/index';
import preset from '@/index';

describe('Twin.arco preset for windi', () => {
  test('WindiCSS preset', () => {
    const processor = new Processor({
      presets: [preset()],
    });
    const result = processor.interpret(
      'text-red-1 bg-red-1 border-red-1 text-arco-text-1 bg-arco-bg-1 border-arco-border-1',
    );
    expect(result.ignored.length).toBe(0);
    expect(result.styleSheet.build()).toMatchSnapshot();
  });

  test('WindiCSS disable opacity', () => {
    const processor = new Processor({
      presets: [preset({ enableOpacity: false })],
    });
    const result = processor.interpret('text-red-1 text-opacity-50');
    expect(result.ignored.length).toBe(0);
    expect(result.styleSheet.build()).toMatchSnapshot();
  });

  test('WindiCSS dark mode', () => {
    const processor = new Processor({
      presets: [preset({ darkMode: 'windicss' })],
    });
    const result = processor.interpret('text-red-1 dark:text-red-10');
    expect(result.ignored.length).toBe(0);
    expect(result.styleSheet.build()).toMatchSnapshot();
  });
});
