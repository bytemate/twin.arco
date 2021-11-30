import { windi } from '@twin.arco/dark-mode';
import { createPalette, createTheme, defaultKeyFormatter } from './utils';

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
    plugins,
    theme: {
      extend: {
        colors: {
          ...createTheme(keyFormatter),
          ...createPalette(enableOpacity, keyFormatter),
        },
      },
    },
  };
}
