import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/UI/Dialog";
import { Dispatch, SetStateAction } from "react";

const ResetPasswordMailDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogContent className="max-w-[680px]">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-h4">
            Письмо успешно отправлено!
          </DialogTitle>
          <DialogDescription>
            Письмо с ссылкой для восстановления пароля было отправлено на
            указанную почту, пожалуйста, перейдите по ней.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ResetPasswordMailDialog;
