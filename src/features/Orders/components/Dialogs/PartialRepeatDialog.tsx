import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared/components/UI/AlertDialog";
import { DialogTriggerProps } from "@radix-ui/react-dialog";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { paths } from "@/config/paths";

const PartialRepeatDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
} & DialogTriggerProps) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="w-full !max-w-[680px] py-8">
        <AlertDialogHeader>
          <AlertDialogTitle>Обновление заказа!</AlertDialogTitle>
          <AlertDialogDescription>
            К сожалению, не все товары из вашего заказа сейчас в наличии.
            Доступные позиции добавлены в корзину.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Link href={paths.catalog.getHref()}>Перейти в каталог</Link>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Link href={paths.cart.getHref()}>Перейти в корзину</Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PartialRepeatDialog;
