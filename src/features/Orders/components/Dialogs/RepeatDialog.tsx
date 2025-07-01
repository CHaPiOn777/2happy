import LoaderIcon from "@/shared/components/icons/LoaderIcon";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/shared/components/UI/AlertDialog";
import { DialogTriggerProps } from "@radix-ui/react-dialog";
import { Dispatch, SetStateAction } from "react";

const RepeatDialog = ({
  open,
  setOpen,
  onAgree,
  isLoading,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onAgree: () => void;
  isLoading: boolean;
} & DialogTriggerProps) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="w-full max-w-[560px] py-8">
        <AlertDialogHeader>
          <AlertDialogDescription>
            Вы уверены, что хотите добавить товары из этого заказа в карзину?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => setOpen(false)}
            disabled={isLoading}
          >
            Отменить
          </AlertDialogCancel>
          <AlertDialogAction onClick={onAgree} disabled={isLoading}>
            {isLoading && <LoaderIcon className="animate-spin" />}
            Подтвердить
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RepeatDialog;
