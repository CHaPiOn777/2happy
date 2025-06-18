import { paths } from "@/config/paths";
import { getCartInfo } from "@/features/Cart/utils/getCartInfo";
import { CartResponse } from "@/features/Cart/types";
import WarningIcon from "@/shared/components/icons/WarningIcon";
import { Button } from "@/shared/components/UI/Button";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import Link from "next/link";
import NavigateToCartButton from "@/features/Cart/components/NavigateToCartButton";
import useObserver from "@/shared/hooks/useObserver";
import { useRef, useState } from "react";
import { cn } from "@/shared/utils";

const CartInfo = ({ cartData }: { cartData: CartResponse }) => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const { totalPriceWithoutSale, totalDiscount, totalPrice, currencySymbol } =
    getCartInfo(cartData);

  const observableRef = useRef<HTMLDivElement>(null);

  useObserver(
    observableRef,
    () => {
      setShowButton(false);
    },
    () => {
      setShowButton(true);
    }
  );

  return (
    <div className="grid grid-cols-[minmax(420px,632px)_minmax(250px,304px)] lg:grid-cols-[repeat(2,_minmax(300px,_490px))_296px] grid-rows-[360px_184px_184px] lg:grid-rows-1 gap-6">
      <div
        ref={observableRef}
        className="flex flex-col col-span-2 lg:col-span-1 gap-8 shadow-elevation-6 rounded-xs border border-main py-8 px-6"
      >
        <h4 className="text-h4">Сумма заказа</h4>
        <div className="flex flex-col text-gray-dark text-body2">
          <div className="flex justify-between py-3 border-b border-gray-light  ">
            <span>Товары:</span>
            <span>
              {totalPriceWithoutSale} {currencySymbol}
            </span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-light">
            <span>Скидка:</span>
            <span>
              - {totalDiscount} {currencySymbol}
            </span>
          </div>
        </div>
        <div className="flex justify-between text-h4">
          <span className="">Итого</span>
          <span className="">
            {totalPrice} {currencySymbol}
          </span>
        </div>

        <NavigateToCartButton
          cartData={cartData}
          buttonProps={{ disabled: !cartData.items_count }}
        />
      </div>
      <div className="flex gap-2 bg-light-disabled py-10 px-4 rounded-xs h-min">
        <WarningIcon className="shrink-0" />
        <div className="flex flex-col gap-2">
          <h5 className="text-h5">Обратите внимание</h5>
          <p className="text-body-2">
            Стоимость доставки не включена в итоговую сумму заказа.
            Она рассчитывается при оформлении. Подробнее о тарифах и сроках
            можно узнать по 
            <Link className="underline" href="/">
              ссылке
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center row-span-2 lg:row-span-1 relative rounded-xs border border-main px-4 shadow-elevation-6">
        <div className="absolute w-full h-full bg-gradient-7 z-10 opacity-50"></div>
        <ImageWithLoader
          wrapperClassName="absolute top-0 left-0"
          className="object-center"
          src="/images/Cart/Cart-1.jpg"
          alt="cart-image"
        />

        <Button
          variant="secondary"
          size="medium"
          className="w-full bg-white z-20"
          asChild
        >
          <Link href={paths.catalog.getHref()}>Продолжить покупки</Link>
        </Button>
      </div>

      <NavigateToCartButton
        className={cn(
          "fixed lg:hidden left-0 bottom-4 w-[calc(100%-64px)] mx-8 z-behind-header transition-all duration-300 ease-in-out",
          showButton
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-8 pointer-events-none"
        )}
        cartData={cartData}
        buttonProps={{ disabled: !cartData.items_count }}
      />
    </div>
  );
};

export default CartInfo;
