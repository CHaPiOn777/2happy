"use client";

import { IconButton } from "@/shared/components/UI/IconButton";
import CartItemChangeDialog from "./CartItemChangeDialog";
import EditIcon from "@/shared/components/icons/EditIcon";
import HeartIcon from "@/shared/components/icons/HeartIcon";
import { CartItemResponse } from "@/features/Cart/types";
import { useDeleteCartItem } from "@/features/Cart/api/cartMutations";
import TrashIcon from "@/shared/components/icons/TrashIcon";
import { getCartItemInfo } from "@/features/Cart/utils/getCartItemInfo";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";

const CartButtons = ({ cartItem }: { cartItem: CartItemResponse }) => {
  const { key } = getCartItemInfo(cartItem);

  const { mutate: deleteCartItem, isPending } = useDeleteCartItem({});

  const isTablet = useMediaCustom("lg");

  return (
    <div className="flex justify-end gap-4">
      <IconButton
        variant="secondary"
        size={isTablet ? "medium" : "small"}
        className="border border-gray"
      >
        <HeartIcon />
      </IconButton>
      <CartItemChangeDialog
        cartItem={cartItem}
        trigger={
          <IconButton
            variant="secondary"
            size={isTablet ? "medium" : "small"}
            className="border border-gray"
          >
            <EditIcon />
          </IconButton>
        }
      />
      {isTablet && (
        <IconButton
          variant="secondary"
          size={isTablet ? "medium" : "small"}
          className="border border-gray"
          onClick={() => {
            deleteCartItem({ key });
          }}
          disabled={isPending}
        >
          <TrashIcon className=" hover:stroke-red" />
        </IconButton>
      )}
    </div>
  );
};

export default CartButtons;
