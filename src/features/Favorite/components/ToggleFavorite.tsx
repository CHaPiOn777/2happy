import {
  ProductDefaultVariation,
  ProductServer,
  ProductVariation,
} from "@/features/Products/types";
import { Slot } from "@radix-ui/react-slot";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { createFavorite } from "../utils/createFavorite";
import { useToggleFavorite } from "../hooks/useToggleFavorite";

const ToggleFavorite = ({
  product,
  variation,
  asChild,
  onClick,
  children,
  ...props
}: {
  product: ProductServer | null;
  variation: ProductVariation | ProductDefaultVariation | null;
  children: (isFavorite: boolean, handleToggle: () => void) => ReactNode;
  asChild?: boolean;
} & Omit<ComponentPropsWithoutRef<"div">, "children">) => {
  const Comp = asChild ? Slot : "div";

  const favorite = product && variation && createFavorite(product, variation);

  const { isFavorite, handleToggle } = useToggleFavorite(favorite);

  return (
    <Comp
      onClick={(e) => {
        onClick?.(e);
      }}
      {...props}
    >
      <>{children(isFavorite, handleToggle)}</>
    </Comp>
  );
};

export default ToggleFavorite;
