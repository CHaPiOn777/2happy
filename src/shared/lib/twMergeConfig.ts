import { extendTailwindMerge } from "tailwind-merge";

export const twMergeConf = extendTailwindMerge<"text", "bg">({
  extend: {
    classGroups: {
      text: [
        "text-h1",
        "text-h1Akira",
        "text-h2",
        "text-h2Akira",
        "text-h3",
        "text-h3Akira",
        "text-h4",
        "text-h5",
        "text-body1",
        "text-body2",
        "text-title",
        "text-title-em",
        "text-description",
        "text-placeholder",
        "text-button-large",
        "text-button-normal",
        "text-button-medium",
        "text-button-small",
        "text-button-xs",
        "text-table-header",
        "text-table-cell",
      ],
      "bg-image": ["bg-radial-gradient", "bg-gradient-4", "bg-footer-texture"],
    },
  },
});
