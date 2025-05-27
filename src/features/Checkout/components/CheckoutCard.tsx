import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { Separator } from "@/shared/components/UI/Separator";
import { CheckoutItem } from "@/shared/types/other";

const CheckoutCard = ({ checkoutItem }: { checkoutItem: CheckoutItem }) => {
  const {
    name,
    size,
    color,
    image,
    quantity,
    price,
    regularPrice,
    sumPrice,
    currencySymbol,
  } = checkoutItem;
  return (
    <article className="flex flex-col gap-4 text-title pb-6 border-b border-gray last:border-b-0 last:pb-0">
      <div className="flex gap-4">
        <ImageWithLoader
          wrapperClassName="w-16 shrink-0"
          src={image?.src ?? ""}
          alt={image?.alt ?? ""}
        />
        <div className="flex flex-col gap-2">
          <div>
            <h5>{name}</h5>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span>Размер</span>
              <Separator className="h-4/6" orientation="vertical" />
              <span className="text-gray-middle text-title">{size}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Цвет</span>
              <Separator className="h-4/6" orientation="vertical" />
              <span className="text-gray-middle text-description">{color}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <span>Цена</span>
          <span className="text-gray-middle">
            {price} {currencySymbol}
          </span>
        </div>
        <div className="flex flex-col gap-2">
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

export default CheckoutCard;
