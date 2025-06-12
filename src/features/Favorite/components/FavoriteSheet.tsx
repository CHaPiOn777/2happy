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
import FavoriteSheetEmpty from "./FavoriteSheetEmpty";
import FavoriteSheetContent from "./FavoriteSheetContent";

const FavoriteSheet = ({
  children,
  triggerProps,
}: {
  children: ReactNode;
  triggerProps?: TSheetTrigger;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const isEmpty = false;

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
          <SheetTitle>Избранное</SheetTitle>
          <SheetDescription>Всего товаров: 2</SheetDescription>
          <SheetClose className="top-6 right-10" />
        </SheetHeader>

        {isEmpty ? (
          <FavoriteSheetEmpty setOpen={setOpen} />
        ) : (
          <FavoriteSheetContent setOpen={setOpen} />
        )}
      </SheetContent>
    </Sheet>
  );
};

export default FavoriteSheet;
