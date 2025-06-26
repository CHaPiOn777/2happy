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

const SuccessRepeatDialog = ({
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
          <AlertDialogTitle className="text-h4">
            Все товары доступны!
          </AlertDialogTitle>
          <AlertDialogDescription>
            Все товары из вашего прошлого заказа добавлены в корзину.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>
            Закрыть
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Link href={paths.cart.getHref()}>Перейти в корзину</Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SuccessRepeatDialog;
