export const GlobalMediaAsNumber = {
  small: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const GlobalMedia = {
  small: `(max-width: ${GlobalMediaAsNumber.small}px)`,
  md: `(max-width: ${GlobalMediaAsNumber.md}px)`,
  lg: `(max-width: ${GlobalMediaAsNumber.lg}px)`,
  xl: `(max-width: ${GlobalMediaAsNumber.xl}px)`,
};

export type GlobalMediaKeys = keyof typeof GlobalMedia;
