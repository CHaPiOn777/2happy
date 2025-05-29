export type TCategories =
  | "final_sale"
  | "new"
  | "bestsellers"
  | "accessories"
  | "collections"
  | "specialEvening"
  | "sportCollection"
  | "everyDayCollection"
  | "clothes"
  | "outerwear"
  | "dresses"
  | "costumes"
  | "trousers"
  | "shirts"
  | "sweatshirtsAndBomberJackets"
  | "skirts";

export type TTags = "new" | "final_sale" | "bestsellers";

export const categoryIds: Record<TCategories, number> = {
  final_sale: 22,
  new: 17,
  collections: 72,
  specialEvening: 73,
  everyDayCollection: 75,
  sportCollection: 74,
  bestsellers: 21,
  accessories: 19,
  clothes: 18,
  outerwear: 20,
  dresses: 24,
  costumes: 23,
  trousers: 27,
  shirts: 26,
  sweatshirtsAndBomberJackets: 33,
  skirts: 25,
};

export const categorySlugs: Record<TCategories, string> = {
  final_sale: "final-sale",
  collections: "collections",
  specialEvening: "special-evening",
  sportCollection: "sport-collection",
  everyDayCollection: "every-day-collection",
  new: "new",
  bestsellers: "bestsellers",
  accessories: "accessories",
  clothes: "clothes",
  outerwear: "outerwear",
  dresses: "dresses",
  costumes: "costumes",
  trousers: "trousers",
  shirts: "shirts",
  sweatshirtsAndBomberJackets: "sweatshirts-bomber-jackets",
  skirts: "skirts",
};

export const tagIds: Record<TTags, number> = {
  final_sale: 59,
  bestsellers: 58,
  new: 57,
};
