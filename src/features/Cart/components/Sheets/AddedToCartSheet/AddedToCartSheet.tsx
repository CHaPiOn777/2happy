"use client";

import Link from "next/link";
import { ReactNode } from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  TSheetProps,
} from "@/shared/components/UI/Sheet";
import CartInfoCard from "../../Cards/CartInfoCard";
import { Button } from "@/shared/components/UI/Button";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Separator } from "@/shared/components/UI/Separator";
import { CartItemResponse } from "@/features/Cart/types";
import { paths } from "@/config/paths";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";

const AddedToCartSheet = ({
  cartItem,
  renderRelatedProducts,
  ...sheetProps
}: {
  cartItem: CartItemResponse;
  renderRelatedProducts: () => ReactNode;
} & TSheetProps) => {
  const isTablet = useMediaCustom("lg");

  return (
    <Sheet {...sheetProps}>
      <SheetContent
        className="flex flex-col items gap-12 w-full max-w-[480px] lg:max-w-[680px] p-8 pt-14 lg:p-10 lg:pt-16 z-over-header overflow-x-hidden overflow-y-scroll"
        overlayClassName="z-over-header"
      >
        <SheetHeader>
          <SheetTitle className="text-h4 lg:text-h3">
            Товар добавлен в корзину
          </SheetTitle>
          <SheetClose className=" top-4 right-8 lg:top-10 lg:right-10" />
        </SheetHeader>
        <div>
          <CartInfoCard cartItem={cartItem} />
        </div>
        <Button
          variant="secondary"
          size={isTablet ? "medium" : "large"}
          className="w-full"
          asChild
        >
          <Link href={paths.cart.getHref()}>
            Перейти в корзину <ArrowUpRightIcon />
          </Link>
        </Button>
        {!isTablet && <Separator />}
        {renderRelatedProducts()}
      </SheetContent>
    </Sheet>
  );
};

export default AddedToCartSheet;
