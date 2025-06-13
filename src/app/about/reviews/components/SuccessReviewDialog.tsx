import { paths } from "@/config/paths";
import { Button } from "@/shared/components/UI/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/UI/Dialog";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

const SuccessReviewDialog = ({
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
          <DialogTitle className="text-h4">Отзыв отправлен!</DialogTitle>
          <DialogDescription>
            Служба поддержки проверит и опубликует ваш отзыв <br /> в ближайшее
            время.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button className="w-full" size="medium" asChild>
            <Link href={paths.catalog.getHref()}>Продолжить покупки</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessReviewDialog;
