"use client";

import PickedAddressCard from "@/features/Addresses/components/Cards/PickedAddressCard";
import ChangePickedAddressDialog from "@/features/Addresses/components/Dialogs/ChangePickedAddressDialog";
import { Button } from "@/shared/components/UI/Button";
import { Checkbox } from "@/shared/components/UI/Checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/UI/Form";
import { Input } from "@/shared/components/UI/Input";
import { UserAddress } from "@/shared/types/api";
import { getStatusIcon } from "@/shared/utils/getStatusIconForInput";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { checkoutForm, CheckoutFormInput } from "./types";

const CheckoutFormWithAddress = ({
  defaultAddress,
  defaultValues,
  onSubmit,
}: {
  onSubmit: (data: CheckoutFormInput) => void;
  defaultValues: CheckoutFormInput | null;
  defaultAddress: UserAddress;
}) => {
  const [address, setAddress] = useState<UserAddress>(defaultAddress);

  const form = useForm<z.infer<typeof checkoutForm>>({
    resolver: zodResolver(checkoutForm),
    defaultValues: {
      email: defaultValues?.email ?? "",
      addressId: defaultValues?.addressId ?? 0,
      firstName: defaultValues?.firstName ?? "",
      lastName: defaultValues?.lastName ?? "",
      address: defaultValues?.address ?? "",
      postalCode: defaultValues?.postalCode ?? "",
      country: defaultValues?.country ?? "",
      region: defaultValues?.region ?? "",
      city: defaultValues?.city ?? "",
      phone: defaultValues?.phone ?? "",
      saveAddress: defaultValues?.saveAddress ?? false,
      agreement: defaultValues?.agreement ?? false,
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 md:space-y-8"
      >
        <div className="flex flex-col gap-6 md:gap-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="E-mail*"
                      endIcon={getStatusIcon(field.value, fieldState.error)}
                      hasError={!!fieldState.error}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <div className="w-full">
          <PickedAddressCard
            address={address}
            rightSlot={
              <div className="flex justify-end gap-6">
                <ChangePickedAddressDialog
                  defaultAddress={address}
                  onSubmit={(data) => {
                    setAddress(data);
                    form.reset({
                      ...form.getValues(),
                      addressId: data.id,
                      ...data,
                    });
                  }}
                >
                  <Button
                    className="w-full sm:w-max"
                    variant="secondary"
                    size="small"
                  >
                    Изменить
                  </Button>
                </ChangePickedAddressDialog>
              </div>
            }
          />
        </div>

        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="agreement"
            render={({ field, fieldState }) => (
              <FormItem className="flex-row items-center">
                <FormControl>
                  <Checkbox
                    className={`size-6 ${
                      fieldState.error ? "shadow-sm shadow-red border-red" : ""
                    }`}
                    checked={field.value ?? false}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="mt-0 text-button-xs text-gray-dark">
                  Подтверждаю свое согласие на обработку персональных данных и
                  ознакомление с{" "}
                  <Link href="/" className="underline text-black">
                    «Политикой конфиденциальности»
                  </Link>
                  .
                </FormLabel>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full">
          Продолжить
        </Button>
      </form>
    </Form>
  );
};

export default CheckoutFormWithAddress;
