"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  TSheetTrigger,
} from "@/shared/components/UI/Sheet";
import { ReactNode, useState } from "react";
import CartSheetEmpty from "./CartSheetEmpty";
import CartSheetContent from "./CartSheetContent";
import { useCart } from "../../../api/cartQueries";
import { getWordForm } from "@/shared/utils/getWordForm";
import CartSheetLoader from "./CartSheetLoader";

const CartSheet = ({
  children,
  triggerProps,
}: {
  children: ReactNode;
  triggerProps?: TSheetTrigger;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const { data, isLoading } = useCart();

  return (
    <Sheet open={open} onOpenChange={(open) => setOpen(open)}>
      <SheetTrigger className="relative" {...triggerProps}>
        {children}
      </SheetTrigger>
      <SheetContent
        className="w-full h-full flex flex-col z-over-header max-w-[480px] lg:max-w-[680px] p-10 pt-14"
        overlayClassName="z-over-header"
      >
        <SheetHeader className="flex flex-col gap-2 lg:gap-4 mb-2 lg:mb-4">
          <SheetTitle>Корзина</SheetTitle>
          {data?.items_count ? (
            <SheetDescription>
              В вашей корзине {data?.items_count}{" "}
              {getWordForm(data?.items_count, {
                one: "товар",
                several: "товара",
                many: "товаров",
              })}
            </SheetDescription>
          ) : null}
          <SheetClose className="top-6 right-10" />
        </SheetHeader>

        {isLoading && <CartSheetLoader />}
        {!isLoading && data?.items_count ? (
          <CartSheetContent cartData={data} setOpen={setOpen} />
        ) : null}
        {!isLoading && !data?.items_count ? (
          <CartSheetEmpty setOpen={setOpen} />
        ) : null}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
