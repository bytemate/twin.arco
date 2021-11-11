import { ThemeCssName, PaletteCssName } from './colors';

export * from './colors';

export type PlainVariable<T extends string> = T extends `--${infer N}`
  ? N
  : never;

export type ThemeName = PlainVariable<ThemeCssName>;

export type PaletteName = PlainVariable<PaletteCssName>;
