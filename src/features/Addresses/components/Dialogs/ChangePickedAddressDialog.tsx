import { Button } from "@/shared/components/UI/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/UI/Dialog";
import { ReactNode, useState } from "react";
import {
  AddressRadioGroup,
  AddressRadioGroupItem,
} from "../Cards/RadioAddressCard";
import { useUser } from "@/shared/api/authApi";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import PlusIcon from "@/shared/components/icons/PlusIcon";
import { ScrollArea } from "@/shared/components/UI/ScrollArea";
import AddAddressDialog from "./AddAddressDialog";
import UpdateAddressDialog from "./UpdateAddressDialog";
import DeleteAddressDialog from "./DeleteAddressDialog";
import { useDeleteUserAddress } from "../../api/addressApi";
import { notify } from "@/shared/lib/notify";
import { UserAddress } from "@/shared/types/api";

const ChangePickedAddressDialog = ({
  defaultAddress,
  children,
  onSubmit,
}: {
  defaultAddress: UserAddress;
  children: ReactNode;
  onSubmit: (address: UserAddress) => void;
}) => {
  const { data: user } = useUser();

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [checkedAddress, setCheckedAddress] =
    useState<UserAddress>(defaultAddress);

  const addresses = user?.multiple_addresses ?? [];

  const { mutate, isPending } = useDeleteUserAddress({
    onSuccess: () => {
      setDeleteId(null);

      notify({ message: "Адрес успешно удален", variant: "success" });
    },
  });

  return (
    <Dialog open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[720px] max-h-[90vh] lg:max-w-[1224px] w-full flex flex-col gap-10 py-20 px-14 lg:px-20">
        <div className="flex flex-col gap-6">
          <DialogHeader className="sr-only">
            <DialogTitle className="sr-only">
              Выберите адрес доставки
            </DialogTitle>
            <DialogDescription className="sr-only">
              Выберите адрес доставки
            </DialogDescription>
          </DialogHeader>
          <div className="rounded-xs border border-main bg-gray-light py-4 px-5">
            <h4 className="text-h5">Адресная книга</h4>
          </div>
          <p className="ml-5 text-body2 text-gray-middle">
            Выберите адрес доставки или добавьте новый
          </p>
          <ScrollArea className="h-[370px] pr-2">
            <div>
              <AddressRadioGroup
                defaultValue={`${defaultAddress.id}`}
                onValueChange={(value) => {
                  const newAddress = addresses?.find(
                    (item) => `${value}` === `${item.id}`
                  );

                  if (newAddress) setCheckedAddress(newAddress);
                }}
              >
                {addresses.map((address) => (
                  <AddressRadioGroupItem
                    key={address.id}
                    id={`${address.id}`}
                    value={`${address.id}`}
                    leftSlot={
                      <h5 className="text-body1 max-w-[180px] w-full">
                        {address.firstName} {address.lastName}
                      </h5>
                    }
                    rightSlot={
                      <div className="flex gap-4 flex-col lg:flex-row">
                        <UpdateAddressDialog title="Адрес" address={address}>
                          <Button variant="secondary" size="small">
                            Редактировать
                          </Button>
                        </UpdateAddressDialog>
                        <DeleteAddressDialog
                          open={deleteId === address.id}
                          setOpen={(open) =>
                            setDeleteId(open ? address.id : null)
                          }
                          onApply={() => {
                            mutate({ id: address.id, user_id: user?.id ?? 0 });
                          }}
                          isLoading={isPending}
                        >
                          <Button
                            className="w-full lg:w-min"
                            disabled={isPending}
                            size={"small"}
                          >
                            Удалить
                          </Button>
                        </DeleteAddressDialog>
                      </div>
                    }
                  >
                    <div className="flex items-start lg:items-center gap-6 flex-col lg:flex-row">
                      <div className="flex flex-col gap-2 text-gray-dark">
                        <span>{address.address}</span>
                        <span>{address.country}</span>
                        <span>{address.city}</span>
                        <span>{formatPhoneNumberIntl(address.phone)}</span>
                      </div>
                    </div>
                  </AddressRadioGroupItem>
                ))}
              </AddressRadioGroup>
            </div>
          </ScrollArea>

          <div className="flex justify-end">
            <AddAddressDialog title="Адрес">
              <Button variant="secondary">
                Добавить новый адрес <PlusIcon />
              </Button>
            </AddAddressDialog>
          </div>
        </div>
        <Button
          className="w-full"
          onClick={() => {
            onSubmit(checkedAddress);
            setDialogOpen(false);
          }}
        >
          Подтвердить адрес доставки
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePickedAddressDialog;
