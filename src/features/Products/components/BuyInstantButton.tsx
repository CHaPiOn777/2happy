import { Button, ButtonProps } from "@/shared/components/UI/Button";
import { ProductVariation } from "../types";
import { useCheckoutStore } from "@/features/Checkout/store/checkoutStore";
import { variationToCheckoutItem } from "../utils/variationToCheckoutItem";
import { useRouter } from "next/navigation";
import { paths } from "@/config/paths";

const BuyInstantButton = ({
  variation,
  onClick,
  ...props
}: { variation: ProductVariation | null } & ButtonProps) => {
  const { setCheckoutItems, setIsEditable } = useCheckoutStore();
  const router = useRouter();

  if (!variation) {
    return (
      <Button className="w-1/2" variant="secondary" {...props} disabled>
        Купить
      </Button>
    );
  }

  const handleClick = () => {
    const checkoutItem = variationToCheckoutItem(variation);
    console.log(checkoutItem);
    setCheckoutItems([checkoutItem]);
    setIsEditable(false);

    router.push(paths.checkout.getHref());
  };

  return (
    <Button
      className="w-1/2"
      variant="secondary"
      onClick={(e) => {
        handleClick();
        onClick?.(e);
      }}
      {...props}
    >
      Купить
    </Button>
  );
};

export default BuyInstantButton;
