"use client";

import { useGetOrder } from "@/features/Orders/api/ordersApi";
import OrderProductCard from "@/features/Orders/components/OrderProductCard";
import { calculateSubtotalFromLineItems } from "@/features/Orders/utils/calculateSubTotal";
import CopyIcon from "@/shared/components/icons/CopyIcon";
import InfoBoldIcon from "@/shared/components/icons/InfoBoldIcon";
import Container from "@/shared/components/UI/Container";
import CopyButton from "@/shared/components/UI/CopyButton";
import Section from "@/shared/components/UI/Section";
import { Separator } from "@/shared/components/UI/Separator";
import TabTitle from "@/shared/components/UI/TabTitle";

const OrderDetails = ({ orderId }: { orderId: number }) => {
  const { data: order } = useGetOrder({ id: orderId });

  const subTotal = calculateSubtotalFromLineItems(order?.line_items ?? []);

  const countItems = order?.line_items.reduce(
    (acc, value) => acc + value.quantity,
    0
  );
  return (
    <Section className="border-b border-main">
      <Container className="flex-col gap-12 md:gap-20 mb-section">
        <div className="flex flex-col gap-6 lg:gap-8 lg:gap-10 w-full">
          <TabTitle titleClass="text-h3 uppercase ">
            1. Детализация заказа
          </TabTitle>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <h4 className="text-h4">Заказ № {order?.number ?? 0}</h4>
              <CopyButton
                copyText={`Заказ № ${order?.number ?? 0}`}
                className="[&_svg]:fill-gray-middle"
              >
                <CopyIcon className="fill-gray-middle" />
              </CopyButton>
              <span className="text-gray-middle">{countItems} товара</span>
            </div>
            <Separator />
            <div>
              {order?.line_items.map((product) => (
                <OrderProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="flex flex-col gap-6 md:gap-0 md:flex-row items-center w-full">
              <div className="w-full flex gap-2 bg-checkout-order-gradient rounded-xs py-6 px-4 sm:py-10 sm:px-10">
                <InfoBoldIcon />
                <div className="w-full max-w-[525px] space-y-2">
                  <h5 className="text-h5">Обратите внимание!</h5>
                  <p>
                    Стоимость доставки не включена в итоговую сумму заказа
                    и оплачивается покупателем отдельно в соответствии
                    с выбранным способом доставки.
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full md:w-[320px] shrink-0 gap-4 border border-main rounded-xs py-6 lg:py-7 px-4 sm:px-10 lg:px-6">
                <h5 className="text-h5">Сумма заказа</h5>
                <div className="flex flex-col text-gray-dark text-body2">
                  <div className="flex justify-between py-3 border-b border-gray-light">
                    <span>Товары:</span>
                    <span>
                      {subTotal} {order?.currency_symbol}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-light">
                    <span>Скидка:</span>
                    <span>
                      {order?.discount_total} {order?.currency_symbol}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-h5 h-12">
                  <span>Итого:</span>
                  <span>
                    {order?.total} {order?.currency_symbol}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-10">
          <TabTitle>2. АДРЕС ДОСТАВКИ</TabTitle>
          <div className="flex flex-col gap-2 text-gray-dark">
            <span>
              {order?.shipping.first_name} {order?.shipping.last_name} /{" "}
              {order?.shipping.phone}
            </span>
            <span>{order?.shipping.address_1}</span>
            {order?.shipping.country && <span>{order?.shipping.country}</span>}
            <span>{order?.shipping.city}</span>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default OrderDetails;
