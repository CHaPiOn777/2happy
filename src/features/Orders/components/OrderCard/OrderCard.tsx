import InfoBoldIcon from "@/shared/components/icons/InfoBoldIcon";
import WhatsAppBoldIcon from "@/shared/components/icons/Social/WhatsAppBoldIcon";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/UI/Accordion";
import { Button } from "@/shared/components/UI/Button";
import { Separator } from "@/shared/components/UI/Separator";
import Link from "next/link";
import OrderProductCard from "../OrderProductCard";
import { OrderResponse } from "../../types";
import { differenceInDays, format } from "date-fns";
import { Skeleton } from "@/shared/components/UI/Skeleton";
import { paths } from "@/config/paths";
import LoaderIcon from "@/shared/components/icons/LoaderIcon";
import RefundButton from "../RefundButton";
import { HELP_TABS } from "@/features/User/utils/isValidHelpTab";
import StyledTooltip from "@/shared/components/UI/StyledTooltip";
import { useState } from "react";
import SuccessRefundDialog from "../Dialogs/SuccessRefundDialog";
import Image from "next/image";
import RepeatOrderButton from "./RepeatOrderButton";

const OrderCard = ({ order }: { order: OrderResponse }) => {
  const [successRefund, setSuccessRefund] = useState<boolean>(false);

  const mobileImages = order.line_items.slice(0, 2).map((item) => item.image);

  const getReturnDisabled = () => {
    switch (true) {
      case order.status === "refunded":
        return "Вы уже оформили возврат.";
      case !!order.date_paid &&
        differenceInDays(new Date(), new Date(order.date_paid)) > 20:
        return "Срок возврата истек.";
      default:
        break;
    }
  };

  return (
    <article>
      <AccordionItem
        className="border border-gray px-4 sm:px-6"
        value={`order_${order.id}`}
      >
        <AccordionTrigger className="py-4 text-body2">
          <div className="w-full grid grid-cols-1 gap-y-4 sm:grid-cols-3">
            <div className="flex sm:flex-col gap-2">
              <span>Дата заказа</span>
              <span className="text-gray-middle">
                {`${format(new Date(order.date_created), "dd.MM.yyyy")}`}
              </span>
            </div>
            <div className="hidden sm:flex flex-col gap-2">
              <span>Номер заказа</span>
              <span className="text-gray-middle">{order.number}</span>
            </div>
            <div className="flex sm:hidden gap-2">
              {mobileImages.map((image) => (
                <Image
                  key={image.id}
                  src={image.src}
                  alt="order-image"
                  width={40}
                  height={56}
                />
              ))}
            </div>
            <div className="flex sm:flex-col gap-2">
              <span>Сумма заказа</span>
              <span className="text-gray-middle">{order.total} ₸</span>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="space-y-6 sm:space-y-8 md:space-y-14 pb-8">
          <div>
            {order.line_items.map((item) => (
              <OrderProductCard key={item.id} product={item} />
            ))}
          </div>
          <div className="grid grid-cols-1 grid-flow-row md:grid-cols-3 lg:grid-cols-[minmax(360px,512px),minmax(220px,312px),minmax(220px,312px)] gap-6 md:gap-4 md:gap-y-12">
            <div className="flex flex-col gap-14 md:max-w-[488px] w-full">
              <div className="w-full hidden lg:flex flex-col gap-6">
                <RepeatOrderButton order={order} />
                <RefundButton
                  order={order}
                  disabled={!!getReturnDisabled()}
                  onSuccess={() => {
                    setSuccessRefund(true);
                  }}
                >
                  <div
                    data-tooltip-id="refund"
                    data-tooltip-content={getReturnDisabled()}
                  >
                    <Button
                      className="w-full"
                      variant="secondary"
                      disabled={!!getReturnDisabled()}
                    >
                      Оформить возврат
                    </Button>
                    <StyledTooltip place="top" id="refund" />
                  </div>
                </RefundButton>
                <SuccessRefundDialog
                  open={successRefund}
                  setOpen={setSuccessRefund}
                />
              </div>
              <div className="flex gap-2 h-full lg:h-auto py-4 md:py-10 px-4 lg:p-4 bg-order-card-help text-description">
                <div className="md:pt-6 lg:pt-0">
                  <InfoBoldIcon className="shrink-0 " />
                </div>
                <div className="flex justify-center flex-col gap-6">
                  <div className="flex gap-2">
                    <p className="text-gray-dark">
                      Оформить возврат можно в течение 14 дней с момента
                      получения заказа. Подробнее об условиях — в разделе{" "}
                      <Link
                        className="text-main"
                        href={paths.help.getHref({ tab: HELP_TABS.REFUNDS })}
                      >
                        Условия возврата / обмена.
                      </Link>
                    </p>
                  </div>
                  <div className="flex gap-4 lg:gap-0 flex-col lg:flex-row justify-between">
                    <span className="text-gray-dark">
                      Возникли вопросы по заказу? Свяжитесь с нами
                    </span>
                    <a
                      target="_blank"
                      href="https://wa.me/77021657378"
                      className="inline-flex items-center gap-2 link-hover"
                    >
                      <WhatsAppBoldIcon className="text-main" />
                      <span className="text-button-xs text-nowrap">
                        +7 (702) 165–73–78
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray">
              <h5 className="text-h5 pt-4 md:pt-6 px-4 sm:px-6 pb-4">
                Способ оплаты
              </h5>
              <Separator className="w-full" />
              <div className="flex flex-col p-4 sm:p-6">
                <span className="uppercase text-button-small sm:text-body2 pb-2 md:pb-0">
                  {order.payment_method_title}
                </span>
                <div className="flex justify-between text-button-xs sm:text-body2 border-b border-gray-light py-2 lg:py-4 text-gray-dark">
                  <span>Товары:</span>
                  <span>{order.total} ₸</span>
                </div>
                <div className="flex justify-between text-button-xs sm:text-body2 border-b border-gray-light py-2 lg:py-4 text-gray-dark">
                  <span>Скидка:</span>
                  <span>{order.discount_total} ₸</span>
                </div>
                <div className="flex justify-between text-h5 pt-4 md:pt-6">
                  <span>Итого:</span>
                  <span>{order.total} ₸</span>
                </div>
              </div>
            </div>
            <div className="border border-gray">
              <h5 className="text-h5 pt-4 md:pt-6 px-4 sm:px-6 pb-4">
                Адрес доставки
              </h5>
              <Separator className="w-full" />
              <div className="flex flex-col gap-4 p-4 sm:p-6">
                <span className="text-button-small sm:text-body1 capitalize">
                  {order.billing.first_name} {order.billing.last_name}
                </span>
                <div className="flex flex-col gap-2 text-button-small sm:text-body2 capitalize text-gray-dark text-body2">
                  <span>{order.billing.address_1}</span>
                  <span>{order.billing.country}</span>
                  <span>{order.billing.city}</span>
                  <span>{order.billing.phone}</span>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col-reverse md:flex-row lg:hidden md:col-span-3 gap-4">
              <RepeatOrderButton order={order} />
              <RefundButton
                order={order}
                disabled={!!getReturnDisabled()}
                onSuccess={() => {
                  setSuccessRefund(true);
                }}
              >
                <div
                  className="w-full"
                  data-tooltip-id="refund"
                  data-tooltip-content={getReturnDisabled()}
                >
                  <Button
                    className="w-full"
                    variant="secondary"
                    size="medium"
                    disabled={!!getReturnDisabled()}
                  >
                    Оформить возврат
                  </Button>
                  <StyledTooltip place="top" id="refund" />
                </div>
              </RefundButton>
              <SuccessRefundDialog
                open={successRefund}
                setOpen={setSuccessRefund}
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </article>
  );
};

export default OrderCard;

export const OrderCardLoader = () => {
  return <Skeleton className="w-full h-[88px]" />;
};
