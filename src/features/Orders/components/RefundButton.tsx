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
import { DialogTriggerProps } from "@radix-ui/react-dialog";
import { OrderResponse } from "../types";
import { useCreateRefundOrder } from "../api/ordersApi";
import LoaderIcon from "@/shared/components/icons/LoaderIcon";
import { useState } from "react";
import { notify } from "@/shared/lib/notify";

const RefundButton = ({
  order,
  children,
  onSuccess,
  ...props
}: { order: OrderResponse; onSuccess?: () => void } & DialogTriggerProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const { mutate: createRefund, isPending } = useCreateRefundOrder({
    onSuccess: () => {
      setOpen(false);
      onSuccess?.();
    },
    onError: () => {
      notify({
        message:
          "Произошла непредвиденная ошибка, свяжитесь с нашим менеджером",
        variant: "error",
      });
    },
  });

  const handleConfirmRefund = () => {
    if (!order || !order.line_items?.length) return;

    const line_items = order.line_items.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));

    const totalAmount = order.line_items.reduce((acc, item) => {
      return acc + parseFloat(item.total || "0");
    }, 0);

    createRefund({
      id: order.id,
      data: {
        api_refund: false,
        amount: totalAmount.toFixed(2),
        reason: "Возврат по запросу клиента",
        line_items,
      },
    });
  };

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
            Вы действительно хотите оформить возврат?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            disabled={isPending}
            onClick={() => setOpen(false)}
          >
            Отменить
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirmRefund} disabled={isPending}>
            {isPending && <LoaderIcon className="animate-spin" />}
            Подтвердить
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RefundButton;
