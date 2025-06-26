import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/UI/Dialog";
import { Dispatch, SetStateAction } from "react";

const SuccessRefundDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogContent>
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-h4">Ваша заявка принята!</DialogTitle>
          <DialogDescription className="text-body2">
            Наш менеджер с вами свяжется в ближайшее время для уточнения деталей
            возврата.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessRefundDialog;
