"use client";

import { paths } from "@/config/paths";
import { useCheckoutStore } from "@/features/Checkout/store/checkoutStore";
import CloseIcon from "@/shared/components/icons/CloseIcon";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/UI/Dialog";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PayDialogPage = () => {
  const [open, setOpen] = useState(true);

  const router = useRouter();

  const { paymentLink } = useCheckoutStore();
  return (
    <Dialog open={open}>
      <DialogContent hideClose className="gap-4 !py-6 !pb-8">
        <DialogHeader className="pr-4 xs:pr-0 justify-between flex-row items-end">
          <DialogTitle className="text-h4">Заказ создан!</DialogTitle>
          <DialogDescription className="sr-only">
            Диалоговое окно с ссылкой на оплату заказа
          </DialogDescription>
          <DialogClose
            className="absolute right-4 top-4"
            onClick={() => {
              router.replace(paths.home.getHref());
              setOpen(false);
            }}
          >
            <CloseIcon />
          </DialogClose>
        </DialogHeader>
        <div>
          Заказ был успешно оформлен, вас перенаправит на страницу оплаты, либо
          перейдите по{" "}
          <a href={paymentLink} className="custom-underline" target="_blank">
            ссылке
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PayDialogPage;
