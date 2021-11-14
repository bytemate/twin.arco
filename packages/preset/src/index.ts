import { createPalette, createTheme, defaultKeyFormatter } from './utils';

export * from './utils';

export interface PresetOptions {
  keyFormatter?: typeof defaultKeyFormatter;
  enableOpacity?: boolean;
}

export default function (
  { keyFormatter, enableOpacity }: PresetOptions = {
    keyFormatter: defaultKeyFormatter,
    enableOpacity: true,
  },
) {
  return {
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
