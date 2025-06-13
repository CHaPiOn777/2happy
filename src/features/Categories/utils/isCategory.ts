import { categoryIds, TCategories } from "../consts/consts";

export const isCategory = (tab: string): tab is TCategories => {
  return Object.keys(categoryIds).includes(tab);
};
