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
import { useGetAllFavorite } from "../api/favoriteApi";
import FavoriteSheetLoader from "./FavoriteSheetLoader";

const FavoriteSheet = ({
  children,
  triggerProps,
}: {
  children: ReactNode;
  triggerProps?: TSheetTrigger;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const { data: favorites, isLoading } = useGetAllFavorite();

  const favoritesCount = favorites?.reduce(
    (acc, item) => (acc += item.quantity),
    0
  );

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
          {favoritesCount ? (
            <SheetDescription>Всего товаров {favoritesCount}</SheetDescription>
          ) : null}
          <SheetClose className="top-6 right-10" />
        </SheetHeader>

        {isLoading && <FavoriteSheetLoader />}
        {!isLoading && favorites?.length ? (
          <FavoriteSheetContent favorites={favorites} setOpen={setOpen} />
        ) : null}
        {!isLoading && !favorites?.length ? (
          <FavoriteSheetEmpty setOpen={setOpen} />
        ) : null}
      </SheetContent>
    </Sheet>
  );
};

export default FavoriteSheet;
