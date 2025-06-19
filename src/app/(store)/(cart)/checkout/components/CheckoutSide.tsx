"use client";

import { paths } from "@/config/paths";
import CheckoutCard from "@/features/Checkout/components/CheckoutCard";
import { useCheckoutStore } from "@/features/Checkout/store/checkoutStore";
import { calculateTotals } from "@/features/Checkout/utils/calculateTotals";
import EditIcon from "@/shared/components/icons/EditIcon";
import { IconButton } from "@/shared/components/UI/IconButton";
import Link from "next/link";
import { useEffect, useRef } from "react";

const CheckoutSide = () => {
  const firstRenderRef = useRef<boolean>(true);

  const {
    checkoutItems,
    itemsCount,
    currencySymbol,
    isEditable,
    clearCheckoutItems,
  } = useCheckoutStore();

  const { totalRegular, totalDiscount, totalFinal } =
    calculateTotals(checkoutItems);

  useEffect(() => {
    return () => {
      if (firstRenderRef.current) firstRenderRef.current = false;
      else clearCheckoutItems();
    };
  }, []);

  return (
    <aside className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_288px] items-end lg:items-stretch lg:grid-cols-1 gap-6">
        <div className="flex flex-col gap-4 border border-main rounded-xs py-7 px-6">
          <h5 className="text-h5">Сумма заказа</h5>
          <div className="flex flex-col text-gray-dark text-body2">
            <div className="flex justify-between py-3 border-b border-gray-light">
              <span>Товары:</span>
              <span>
                {totalRegular} {currencySymbol}
              </span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-light">
              <span>Скидка:</span>
              <span>
                - {totalDiscount} {currencySymbol}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between text-h5 h-12">
            <span>Итого:</span>
            <span>
              {totalFinal} {currencySymbol}
            </span>
          </div>
        </div>
        <div className="text-title rounded-xs bg-light-disabled p-4">
          Стоимость доставки не включена в итоговую сумму заказа.
          Она рассчитывается при оформлении. Подробнее о тарифах и сроках можно
          узнать по 
          <Link href="/" className="underline">
            ссылке
          </Link>
          .
        </div>
      </div>
      <div className="flex flex-col gap-6 border border-main rounded-xs p-6">
        <div className="flex justify-between">
          <h5 className="text-h5">
            Корзина{" "}
            <span className="text-body2 text-gray-middle">({itemsCount})</span>
          </h5>
          {isEditable && (
            <Link href={paths.cart.getHref()}>
              <IconButton
                variant="secondary"
                size="extraSmall"
                className="p-1 [&_svg]:size-6"
              >
                <EditIcon />
              </IconButton>
            </Link>
          )}
        </div>
        <div className="flex flex-col gap-8">
          {checkoutItems.map((item) => (
            <CheckoutCard key={item.id} checkoutItem={item} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default CheckoutSide;
