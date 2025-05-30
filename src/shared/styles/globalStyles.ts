export const GlobalMediaAsNumber = {
  mobile: 576,
  md: 640,
  lg: 1024,
  xl: 1280,
};

export const GlobalMedia = {
  mobile: `(max-width: ${GlobalMediaAsNumber.mobile}px)`,
  md: `(max-width: ${GlobalMediaAsNumber.md}px)`,
  lg: `(max-width: ${GlobalMediaAsNumber.lg}px)`,
  xl: `(max-width: ${GlobalMediaAsNumber.xl}px)`,
};

export type GlobalMediaKeys = keyof typeof GlobalMedia;
