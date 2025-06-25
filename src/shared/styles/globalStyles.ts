export const GlobalMediaAsNumber = {
  small: 479,
  md: 767,
  lg: 1023,
  xl: 1279,
};

export const GlobalMedia = {
  small: `(max-width: ${GlobalMediaAsNumber.small}px)`,
  md: `(max-width: ${GlobalMediaAsNumber.md}px)`,
  lg: `(max-width: ${GlobalMediaAsNumber.lg}px)`,
  xl: `(max-width: ${GlobalMediaAsNumber.xl}px)`,
};

export type GlobalMediaKeys = keyof typeof GlobalMedia;
