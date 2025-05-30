import { useMediaQuery } from "usehooks-ts";
import { GlobalMedia, GlobalMediaKeys } from "../styles/globalStyles";

export const useMediaCustom = (key: GlobalMediaKeys) =>
  useMediaQuery(GlobalMedia[key]);
