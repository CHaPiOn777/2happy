import { ChipVariant } from "@/shared/components/UI/Chip";
import { FavoriteProduct } from "../types";

export const getFavoriteChip = (
  favorite: FavoriteProduct
): { type: ChipVariant; text: string } | null => {
  const hasNewTag = favorite.tags.some((item) => item.slug === "new");
  const hasBestesellerTag = favorite.tags.some(
    (item) => item.slug === "bestseller"
  );
  const isOutOfStock = favorite.stock_status === "outofstock";

  switch (true) {
    case isOutOfStock:
      return { type: "black", text: "Нет на складе" };
    case favorite.on_sale:
      return { type: "red", text: `Final Sale` };
    case hasNewTag:
      return { type: "yellow", text: "Новый сезон" };
    case hasBestesellerTag:
      return { type: "green", text: "Бестселлер" };
    default:
      return null;
  }
};
