import AddAddressDialog from "@/features/Addresses/components/Dialogs/AddAddressDialog";
import AddressCard from "@/features/Addresses/components/Cards/AddressCard";
import { useUser } from "@/shared/api/authApi";
import { Button } from "@/shared/components/UI/Button";
import { useMemo } from "react";

const AddressesTab = () => {
  const { data } = useUser();

  const addresses = useMemo(
    () => data?.multiple_addresses ?? [],
    [data?.multiple_addresses]
  );

  return (
    <div className="flex flex-col w-full gap-12">
      <div className="border border-gray-middle bg-gray-light py-4 px-5">
        <h4 className="text-h5">Адресная книга</h4>
      </div>
      {!addresses.length && (
        <div className="w-full flex justify-center items-center p-6 bg-main text-white">
          В настоящее время нет адресов
        </div>
      )}
      {addresses.map((address) => (
        <AddressCard key={address.id} address={address} />
      ))}
      <div className="flex flex-col gap-8 lg:gap-4 border border-gray-middle p-6 mt-12">
        <h5 className="text-h5">Добавить новый адрес</h5>
        <div className="flex justify-end">
          <AddAddressDialog title="Новый адрес">
            <Button className="w-full lg:w-max">Добавить</Button>
          </AddAddressDialog>
        </div>
      </div>
    </div>
  );
};

export default AddressesTab;
