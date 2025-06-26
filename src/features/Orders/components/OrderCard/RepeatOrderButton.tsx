import { useAddManyToCart } from "@/features/Cart/api/cartMutations";
import { OrderResponse } from "../../types";
import { notify } from "@/shared/lib/notify";
import { useMutation } from "@tanstack/react-query";
import { getProductVariationsList } from "@/features/Products/api/productsApi";
import { repeatOrder } from "../../utils/repeatOrder";
import { Button } from "@/shared/components/UI/Button";
import LoaderIcon from "@/shared/components/icons/LoaderIcon";
import { useState } from "react";
import PartialRepeatDialog from "../Dialogs/PartialRepeatDialog";
import NotFoundRepeatDialog from "../Dialogs/NotFoundRepeatDialog";
import SuccessRepeatDialog from "../Dialogs/SuccessRepeatDialog";
import RepeatDialog from "../Dialogs/RepeatDialog";

const RepeatOrderButton = ({ order }: { order: OrderResponse }) => {
  const [repeatOpen, setRepeatOpen] = useState<boolean>(false);
  const [partialRepeatOpen, setPartialRepeatOpen] = useState<boolean>(false);
  const [notFoundRepeatOpen, setNotFoundRepeatOpen] = useState<boolean>(false);
  const [successRepeatOpen, setSuccessRepeatOpen] = useState<boolean>(false);

  const orderIds = order.line_items.map((item) => item.variation_id);

  const { mutate: addManyToCart } = useAddManyToCart({});

  const { mutate: getVariations, isPending } = useMutation({
    mutationFn: () => getProductVariationsList({ ids: orderIds }),
    onSuccess: (orderProducts) => {
      setRepeatOpen(false);
      const checkoutItems = repeatOrder(order, orderProducts ?? []).map(
        (item) => ({
          id: item.parentId,
          quantity: item.quantity,
          variation_id: item.id,
        })
      );

      if (!checkoutItems.length) {
        setNotFoundRepeatOpen(true);
        return;
      }

      if (checkoutItems.length != order.line_items.length)
        setPartialRepeatOpen(true);

      if (checkoutItems.length === order.line_items.length)
        setSuccessRepeatOpen(true);

      addManyToCart({ items: checkoutItems });
    },
  });

  const handleRepeatOrder = () => {
    getVariations();
  };
  return (
    <>
      <Button
        className="w-full"
        onClick={() => setRepeatOpen(true)}
        disabled={isPending}
      >
        {isPending && <LoaderIcon className="animate-spin" />}
        Повторить заказ
      </Button>
      <PartialRepeatDialog
        open={partialRepeatOpen}
        setOpen={setPartialRepeatOpen}
      />
      <NotFoundRepeatDialog
        open={notFoundRepeatOpen}
        setOpen={setNotFoundRepeatOpen}
      />
      <SuccessRepeatDialog
        open={successRepeatOpen}
        setOpen={setSuccessRepeatOpen}
      />
      <RepeatDialog
        open={repeatOpen}
        setOpen={setRepeatOpen}
        onAgree={handleRepeatOrder}
        isLoading={isPending}
      />
    </>
  );
};

export default RepeatOrderButton;
