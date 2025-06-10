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
import { PhoneInput } from "@/shared/components/UI/PhoneInput";
import { getStatusIcon } from "@/shared/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addressSchema, UpdateUserAddressInput } from "../api/addressApi";
import LoaderIcon from "@/shared/components/icons/LoaderIcon";

const AddressForm = ({
  defaultValues,
  onSubmit,
  isPending,
}: {
  defaultValues?: UpdateUserAddressInput;
  onSubmit: (data: UpdateUserAddressInput) => void;
  isPending: boolean;
}) => {
  const addressForm = useForm<UpdateUserAddressInput>({
    resolver: zodResolver(addressSchema),
    mode: "onChange",
    defaultValues: defaultValues ?? {
      firstName: "",
      lastName: "",
      address: "",
      postalCode: "",
      country: "",
      region: "",
      city: "",
      phone: "",
      isDefaultShipping: false,
    },
  });

  return (
    <Form {...addressForm}>
      <form
        onSubmit={addressForm.handleSubmit(onSubmit)}
        className="space-y-10"
      >
        <div className="space-y-6">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
            <FormField
              control={addressForm.control}
              name="firstName"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Имя*"
                      endIcon={getStatusIcon(field.value, fieldState.error)}
                      hasError={!!fieldState.error}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addressForm.control}
              name="lastName"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Фамилия*"
                      endIcon={getStatusIcon(field.value, fieldState.error)}
                      hasError={!!fieldState.error}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addressForm.control}
              name="address"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Адрес*"
                      endIcon={getStatusIcon(field.value, fieldState.error)}
                      hasError={!!fieldState.error}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addressForm.control}
              name="postalCode"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Почтовый индекс*"
                      endIcon={getStatusIcon(field.value, fieldState.error)}
                      hasError={!!fieldState.error}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addressForm.control}
              name="country"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Страна*"
                      endIcon={getStatusIcon(field.value, fieldState.error)}
                      hasError={!!fieldState.error}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addressForm.control}
              name="region"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Область / Регион" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addressForm.control}
              name="city"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Город*"
                      endIcon={getStatusIcon(field.value, fieldState.error)}
                      hasError={!!fieldState.error}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addressForm.control}
              name="phone"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <PhoneInput
                      endIcon={getStatusIcon(field.value, fieldState.error)}
                      hasError={!!fieldState.error}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col space-y-4">
            <FormField
              control={addressForm.control}
              name="isDefaultShipping"
              render={({ field }) => (
                <FormItem className="flex-row items-center">
                  <FormControl>
                    <Checkbox
                      className="size-6"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-gray-dark text-button-xs mt-0">
                    Адрес доставки по умолчанию
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button
          disabled={isPending || !addressForm.formState.isDirty}
          type="submit"
          className="w-full"
        >
          {isPending && <LoaderIcon className="animate-spin" />}
          Сохранить
        </Button>
      </form>
    </Form>
  );
};

export default AddressForm;
