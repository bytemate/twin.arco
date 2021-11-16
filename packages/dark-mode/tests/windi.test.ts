import { Processor } from 'windicss/lib/index';
import plugin from '@/windi';

describe('Windi Arco Dark Mode Plugin', () => {
  it('should generate arco dark mode selector', () => {
    const processor = new Processor({ darkMode: false, plugins: [plugin] });
    const result = processor.interpret('bg-red-900 dark:bg-red-100');
    expect(result.styleSheet.build()).toMatchSnapshot();
  });

  it('should generate media dark selector', () => {
    const processor = new Processor({ darkMode: 'media', plugins: [plugin] });
    const result = processor.interpret('bg-red-900 dark:bg-red-100');
    expect(result.styleSheet.build()).toMatchSnapshot();
  });

  it('should generate class dark selector', () => {
    const processor = new Processor({ darkMode: 'class', plugins: [plugin] });
    const result = processor.interpret('bg-red-900 dark:bg-red-100');
    expect(result.styleSheet.build()).toMatchSnapshot();
  });
});
