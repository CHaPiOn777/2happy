import { paths } from "@/config/paths";
import { useCheckoutStore } from "@/features/Checkout/store/checkoutStore";
import { CartResponse } from "../types";
import { cartItemToCheckoutItem } from "../utils/cartItemToCheckoutItem";

export const useNavigateCheckout = ({
  cartData,
  disabled,
}: {
  cartData: CartResponse;
  disabled?: boolean;
}) => {
  const { setCheckoutItems } = useCheckoutStore();

  const handleClick = () => {
    if (disabled) return;

    const checkoutItems = cartData.items.map((item) =>
      cartItemToCheckoutItem(item)
    );

    setCheckoutItems(checkoutItems);
  };

  return { link: disabled ? "" : paths.checkout.getHref(), handleClick };
};
