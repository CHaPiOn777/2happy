import { CheckoutItem } from "@/shared/types/other";
import { create } from "zustand";

type TCheckoutStore = {
  checkoutItems: CheckoutItem[];
  currencySymbol: string;
  itemsCount: number;
  paymentLink: string;
  isEditable: boolean;
  setIsEditable: (value: boolean) => void;
  setPaymentLink: (paymentLink: string) => void;
  setCheckoutItems: (checkoutItems: CheckoutItem[]) => void;
  clearCheckoutItems: () => void;
};

export const useCheckoutStore = create<TCheckoutStore>((set) => ({
  checkoutItems: [],
  currencySymbol: "₸",
  paymentLink: "",
  itemsCount: 0,
  isEditable: true,
  setIsEditable: (isEditable) => {
    set({ isEditable });
  },
  setPaymentLink: (paymentLink) => {
    set({ paymentLink });
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
