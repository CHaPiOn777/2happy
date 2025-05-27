import {
  PaymentRadioGroup,
  PaymentRadioGroupItem,
} from "@/features/Checkout/components/PaymentRadio/PaymentRadioButtons";
import CardIcon from "@/shared/components/icons/Payment/CardIcon";
import StyledTooltip from "@/shared/components/UI/StyledTooltip";
import Image from "next/image";

const CheckoutFormPayment = ({
  onValueChange,
}: {
  onValueChange: (value: string) => void;
}) => {
  return (
    <PaymentRadioGroup onValueChange={onValueChange}>
      <PaymentRadioGroupItem
        id="robokassa"
        value="robokassa"
        rightSlot={<CardIcon />}
      >
        Банковская карта (Robokassa)
      </PaymentRadioGroupItem>
      <div data-tooltip-id="payment-kaspi" data-tooltip-content="В разработке">
        <PaymentRadioGroupItem
          id="kaspi-red"
          value="kaspi-red"
          disabled
          rightSlot={
            <Image
              width={28}
              height={16}
              src="/images/Cart/payment/kaspi.png"
              alt="kaspi"
            />
          }
        >
          Оплата Kaspi Bank (оплата через Kaspi.kz)
        </PaymentRadioGroupItem>
        <StyledTooltip place="top" id="payment-kaspi" />
      </div>
    </PaymentRadioGroup>
  );
};

export default CheckoutFormPayment;
