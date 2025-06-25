import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { Separator } from "@/shared/components/UI/Separator";
import { OrderProductItem } from "../types";
import OrderProductDialog from "./OrderProductDialog";

const OrderProductCard = ({ product }: { product: OrderProductItem }) => {
  const color = product.meta_data.find((item) => item.key === "pa_color");
  const size = product.meta_data.find((item) => item.key === "pa_size");

  return (
    <article className="flex gap-12 justify-between items-center py-8 pr-4 border-b border-b-gray last:border-b-0">
      <div className="flex gap-6 items-center">
        <ImageWithLoader
          src={product.image.src}
          textClassName="text-sm"
          wrapperClassName="w-[96px] h-[128px]"
          alt=""
        />
        <div className="flex flex-col gap-4">
          <OrderProductDialog orderProduct={product}>
            <h5 className="text-h5 cursor-pointer">{product.name}</h5>
          </OrderProductDialog>
          <div className="flex gap-4 text-gray-middle">
            <span>Артикул:</span>
            <span>{product.sku}</span>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-4">
              <span>Размер</span>
              <Separator className="h-4/6" orientation="vertical" />
              <span className="text-gray-middle text-body2 whitespace-nowrap">
                {size?.display_value}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span>Цвет</span>
              <Separator className="h-4/6" orientation="vertical" />
              <span className="text-gray-middle text-body2">
                {color?.display_value}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[600px] w-full grid grid-cols-3 items-center">
        <span>{product.price} ₸</span>
        <div className="bg-gray-light text-body2 p-2 justify-self-center">
          {product.quantity} шт
        </div>
        <span className="justify-self-end">{product.total} ₸</span>
      </div>
    </article>
  );
};

export default OrderProductCard;
