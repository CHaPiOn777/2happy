"use client";
import {
  Sheet,
  SheetTrigger,
  TSheetTrigger,
} from "@/shared/components/UI/Sheet";
import { ReactNode, useState } from "react";
import MenuSheetContent from "./MenuSheetContent";

export const MenuSheet = ({
  children,
  triggerProps,
}: {
  children: ReactNode;
  triggerProps?: TSheetTrigger;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Sheet open={open} onOpenChange={(open) => setOpen(open)}>
      <SheetTrigger {...triggerProps}>{children}</SheetTrigger>
      <MenuSheetContent open={open} setOpen={setOpen} />
    </Sheet>
  );
};

export default MenuSheet;
