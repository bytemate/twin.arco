import twinArcoPreset from '@twin.arco/preset';

export { createRgb, createRgba } from '@twin.arco/preset';
export type { CssVariableString } from '@twin.arco/preset';

/**
 * @deprecated
 * Please use `presets options` like following example in `tailwind.config.js` or `windi.config.js`
 *
 * @example
 * import { preset } from 'twin.arco'
 *
 * modules.export = {
 *  presets: [preset()]
 * }
 */
// eslint-disable-next-line prefer-destructuring
export const extend = twinArcoPreset().theme.extend;

export const preset = twinArcoPreset;
