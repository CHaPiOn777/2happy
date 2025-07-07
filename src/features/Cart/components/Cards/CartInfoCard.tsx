import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { Separator } from "@/shared/components/UI/Separator";
import { CartItemResponse } from "../../types";
import { getCartItemInfo } from "../../utils/getCartItemInfo";

const CartInfoCard = ({ cartItem }: { cartItem: CartItemResponse }) => {
  const {
    image,
    name,
    size,
    color,
    quantity,
    price,
    sumPrice,
    currencySymbol,
  } = getCartItemInfo(cartItem);
  return (
    <article className="flex flex-col gap-4 w-full pb-6 border-b border-b-gray lg:last:border-b-0 lg:last:pb-0 text-title-em">
      <div className="flex gap-4">
        <ImageWithLoader
          wrapperClassName="w-[64px] lg:w-[86px] h-[96px] lg:h-[128px] shrink-0"
          src={image.src}
          alt={image.alt}
        />
        <div className="flex flex-col justify-between my-2 lg:my-0">
          <h5 className="max-w-[230px] text-title lg:text-body2">{name}</h5>
          <div className="flex flex-col gap-2 text-title lg:text-body2">
            <div className="flex items-center gap-4">
              <span>Размер</span>
              <Separator className="h-4/6" orientation="vertical" />
              <span className="text-gray-middle">{size}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Цвет</span>
              <Separator className="h-4/6" orientation="vertical" />
              <span className="text-gray-middle">{color}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-title lg:text-body2">
        <div className="flex flex-col gap-2">
          <span>Цена</span>
          <span className="text-gray-middle">
            {price} {currencySymbol}
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span>Количество</span>
          <span className="text-gray-middle">{quantity}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>Сумма</span>
          <span className="text-gray-middle">
            {sumPrice} {currencySymbol}
          </span>
        </div>
      </div>
    </article>
  );
};

export default CartInfoCard;
