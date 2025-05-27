import { CheckoutItem } from "@/shared/types/other";
import { create } from "zustand";

type TCheckoutStore = {
  checkoutItems: CheckoutItem[];
  currencySymbol: string;
  itemsCount: number;
  isEditable: boolean;
  setIsEditable: (value: boolean) => void;
  setCheckoutItems: (checkoutItems: CheckoutItem[]) => void;
  clearCheckoutItems: () => void;
};

export const useCheckoutStore = create<TCheckoutStore>((set) => ({
  checkoutItems: [],
  currencySymbol: "₸",
  itemsCount: 0,
  isEditable: true,
  setIsEditable: (isEditable) => {
    set({ isEditable });
  },
  setCheckoutItems: (checkoutItems) => {
    const itemsCount = checkoutItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    set({ itemsCount });
    set({ checkoutItems });
  },
  clearCheckoutItems: () => {
    set({ checkoutItems: [] });
  },
}));
