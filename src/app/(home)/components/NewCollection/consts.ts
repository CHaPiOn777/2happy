import { Product } from "@/features/Products/types";

export const SIZES_TW = {
  big: "w-[288px] h-[472px] sm:h-[552px] ",
  medium: "w-[184px] h-[410px] sm:h-[464px]",
  small: "w-[184px] h-[376px]",
} as const;

export const SIZES = {
  big: { width: "288px", height: "552px" },
  medium: { width: "184px", height: "464px" },
  small: { width: "184px", height: "376px" },
} as const;

export const SLIDES_SIZES: Array<keyof typeof SIZES> = [
  "big",
  "small",
  "small",
  "small",
  "medium",
  "big",
  "small",
  "small",
  "medium",
  "small",
] as const;
