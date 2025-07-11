import { CheckoutItem } from "@/shared/types/other";

export function calculateTotals(items: CheckoutItem[]) {
  return items.reduce(
    (acc, item) => {
      const regular =
        parseFloat(item.regularPrice.replace(/\s/g, "").replace(",", ".")) *
        item.quantity;

      // Используем regularPrice, если salePrice пустая строка или невалидное значение
      const salePriceValue = item.salePrice?.trim()
        ? parseFloat(item.salePrice.replace(/\s/g, "").replace(",", "."))
        : parseFloat(item.regularPrice.replace(/\s/g, "").replace(",", "."));
      const sale = salePriceValue * item.quantity;

      const discount = regular - sale;

      acc.totalRegular += regular;
      acc.totalDiscount += discount;
      acc.totalFinal += sale;

      return acc;
    },
    {
      totalRegular: 0,
      totalDiscount: 0,
      totalFinal: 0,
    }
  );
}
