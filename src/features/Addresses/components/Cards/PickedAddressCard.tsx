import { UserAddress } from "@/shared/types/api";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import { ReactNode } from "react";

const PickedAddressCard = ({
  address,
  rightSlot,
}: {
  address: UserAddress;
  rightSlot?: ReactNode;
}) => {
  return (
    <div className="flex justify-between flex-col sm:flex-row gap-4 border border-main p-6">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <h5 className="text-h5">
            {address.firstName} {address.lastName}
          </h5>
        </div>
        <div className="flex flex-col gap-2">
          <span>{address.address}</span>
          <span>{address.country}</span>
          <span>{address.city}</span>
          <span>{formatPhoneNumberIntl(address.phone)}</span>
        </div>
      </div>
      {rightSlot}
    </div>
  );
};

export default PickedAddressCard;
