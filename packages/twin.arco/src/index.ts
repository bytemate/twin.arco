import preset from './preset';

/**
 * @deprecated
 * Please use `presets options` like following example in `tailwind.config.js` or `windi.config.js`
 *
 * @example
 * import preset from 'twin.arco/preset'
 *
 * modules.export = {
 *  presets: [preset()]
 * }
 */
// eslint-disable-next-line prefer-destructuring
export const extend = preset().theme.extend;
