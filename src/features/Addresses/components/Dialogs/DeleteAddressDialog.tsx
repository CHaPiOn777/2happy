import LoaderIcon from "@/shared/components/icons/LoaderIcon";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/shared/components/UI/AlertDialog";
import { AlertDialogTriggerProps } from "@radix-ui/react-alert-dialog";
import { Dispatch, ReactNode, SetStateAction } from "react";

const DeleteAddressDialog = ({
  children,
  open,
  setOpen,
  onApply,
  isPending,
  ...props
}: {
  children: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onApply: () => void;
  isPending: boolean;
} & AlertDialogTriggerProps) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger
        onClick={() => {
          if (props.disabled) return;
          setOpen(true);
        }}
        {...props}
        asChild
      >
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="sr-only">
            Подтверждение возврата
          </AlertDialogTitle>
          <AlertDialogDescription>
            Вы действительно хотите удалить этот адрес?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            disabled={isPending}
            onClick={() => setOpen(false)}
          >
            Отменить
          </AlertDialogCancel>
          <AlertDialogAction onClick={onApply} disabled={isPending}>
            {isPending && <LoaderIcon className="animate-spin" />}
            Удалить
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAddressDialog;
