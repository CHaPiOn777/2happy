import { CartItemResponse } from "@/features/Cart/types";
import CloseIcon from "@/shared/components/icons/CloseIcon";
import { Button } from "@/shared/components/UI/Button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/UI/Sheet";
import { ReactNode } from "react";
import CartItemChangeDialog from "../../Dialogs/CartItemChangeDialog";
import { useDeleteCartItem } from "@/features/Cart/api/cartMutations";
import LoaderIcon from "@/shared/components/icons/LoaderIcon";

const CartDefaultCardMenu = ({
  cartItem,
  children,
}: {
  cartItem: CartItemResponse;
  children: ReactNode;
}) => {
  const { mutate: deleteCartItem, isPending } = useDeleteCartItem({});

  const handleDelete = () => {
    deleteCartItem({ key: cartItem.key });
  };
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        className="flex flex-col gap-4 pb-8 px-4 !pt-10"
        side="bottom"
      >
        <SheetHeader>
          <SheetTitle className="sr-only">Действия с товаром</SheetTitle>
          <SheetDescription className="sr-only">
            Действия с товаром
          </SheetDescription>
          <SheetClose>
            <CloseIcon />
          </SheetClose>
        </SheetHeader>
        <CartItemChangeDialog cartItem={cartItem}>
          <Button size="medium" className="w-full">
            Изменить
          </Button>
        </CartItemChangeDialog>
        <Button
          size="medium"
          variant="secondary"
          className="w-full"
          onClick={handleDelete}
          disabled={isPending}
        >
          {isPending && <LoaderIcon className="animate-spin" />}
          Удалить из корзины
        </Button>
      </SheetContent>
    </Sheet>
  );
};

export default CartDefaultCardMenu;
