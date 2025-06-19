import InfoBoldIcon from "@/shared/components/icons/InfoBoldIcon";
import { CheckoutFormInput } from "./types";
import { formatPhoneNumberIntl } from "react-phone-number-input";

const CheckoutFormAddress = ({ address }: { address: CheckoutFormInput }) => {
  return (
    <div className="flex gap-6 flex-col md:flex-row">
      <div className="flex-1 space-y-4 px-5">
        <h5 className="text-h5">
          {address.firstName} {address.lastName}
        </h5>
        <div className="flex flex-col gap-2">
          <span>{address.address}</span>
          <span>{address.country}</span>
          <span>{address.city}</span>
          <span>{formatPhoneNumberIntl(address.phone)}</span>
        </div>
      </div>
      <div className="flex gap-2 flex-1 bg-light-disabled border border-main p-4">
        <InfoBoldIcon />
        <div className="flex flex-col gap-2">
          <h5>Стоимость доставки будет расчитана позже</h5>
          <p className="text-description text-gray-dark">
            После оформления заказа, наш менеджер свяжется с вами для обсуждения
            условий доставки.
          </p>
          <p className="text-description text-gray-dark">
            Если заказ был оформлен после 17:00 по времени Астаны, мы свяжемся с
            вами на следующий день.
          </p>
          <p className="text-description text-gray-dark">
            С условиями доставки можно ознакомиться по ссылке.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutFormAddress;
