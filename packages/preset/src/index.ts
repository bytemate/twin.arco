import { windi } from '@twin.arco/dark-mode';
import { createRgba, createRgb, defaultKeyFormatter } from './utils';

export * from './utils';

export interface PresetOptions {
  keyFormatter?: typeof defaultKeyFormatter;
  enableOpacity?: boolean;
  darkMode?: 'windicss' | 'tailwindcss' | false;
}

export default function ({
  keyFormatter = defaultKeyFormatter,
  enableOpacity = true,
  darkMode = false,
}: PresetOptions = {}) {
  const plugins = darkMode === 'windicss' ? [windi] : undefined;
  return {
    darkMode: plugins?.length ? false : (undefined as false | undefined),
    plugins,
    theme: {
      extend: {
        colors: {
          ...createRgb(keyFormatter),
          ...createRgba(keyFormatter, undefined, enableOpacity),
        },
      },
    },
  };
}
