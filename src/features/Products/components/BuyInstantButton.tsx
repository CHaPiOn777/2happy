import { Button, ButtonProps } from "@/shared/components/UI/Button";
import { ProductVariation } from "../types";
import { useCheckoutStore } from "@/features/Checkout/store/checkoutStore";
import { variationToCheckoutItem } from "../utils/variationToCheckoutItem";
import { useRouter } from "next/navigation";
import { paths } from "@/config/paths";

const BuyInstantButton = ({
  name,
  variation,
  onClick,
  ...props
}: {
  name: string | undefined;
  variation: ProductVariation | null;
} & Omit<ButtonProps, "name">) => {
  const { setCheckoutItems, setIsEditable } = useCheckoutStore();
  const router = useRouter();

  if (!variation) {
    return (
      <Button
        className="w-full sm:w-1/2"
        variant="secondary"
        {...props}
        disabled
      >
        Купить
      </Button>
    );
  }

  const handleClick = () => {
    variation.name = name ?? "";
    const checkoutItem = variationToCheckoutItem(variation);
    setCheckoutItems([checkoutItem]);
    setIsEditable(false);

    router.push(paths.checkout.getHref());
  };

  return (
    <Button
      className="w-full sm:w-1/2"
      variant="secondary"
      onClick={(e) => {
        handleClick();
        onClick?.(e);
      }}
      {...props}
    >
      <span>Купить</span>
      <div className="absolute w-full h-full bg-white -z-10" />
    </Button>
  );
};

export default BuyInstantButton;
