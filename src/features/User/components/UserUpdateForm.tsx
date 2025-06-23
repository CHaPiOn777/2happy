"use client";

import { useUser } from "@/shared/api/authApi";
import { Button } from "@/shared/components/UI/Button";
import DatePickerInput from "@/shared/components/UI/DatePickerInput";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/components/UI/Form";
import { Input } from "@/shared/components/UI/Input";
import { PhoneInput } from "@/shared/components/UI/PhoneInput";
import { getStatusIcon } from "@/shared/utils/getStatusIconForInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  UpdateUserInput,
  updateUserSchema,
  useUpdateUser,
} from "../api/updateUserApi";
import LoaderIcon from "@/shared/components/icons/LoaderIcon";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";

const UserUpdateForm = () => {
  const isMedium = useMediaCustom("md");

  const { data } = useUser();

  const form = useForm<z.infer<typeof updateUserSchema>>({
    resolver: zodResolver(updateUserSchema),
    mode: "onChange",
    defaultValues: {
      name: data?.first_name ?? "",
      surname: data?.last_name ?? "",
      email: data?.email ?? "",
      confirmEmail: data?.email ?? "",
      birthday: data?.meta.birth_date
        ? new Date(data?.meta.birth_date)
        : undefined,
      phone: data?.meta.phone_number ? data?.meta.phone_number : "",
    },
  });

  const { mutate, isPending } = useUpdateUser();

  function onSubmit(values: UpdateUserInput) {
    if (!data) return;
    mutate({ id: data.id, data: values });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 md:space-y-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field, fieldState }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input
                      title="Имя*"
                      placeholder="Имя"
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
          <FormField
            control={form.control}
            name="surname"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input
                    title="Фамилия*"
                    placeholder="Фамилия"
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
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input
                    title="Email*"
                    placeholder="Введите email"
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
            control={form.control}
            name="confirmEmail"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input
                    title="Подтвердите email"
                    placeholder="Введите email еще раз"
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
            control={form.control}
            name="phone"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <PhoneInput
                    title="Номер телефона*"
                    hasError={!!fieldState.error}
                    endIcon={getStatusIcon(field.value, fieldState.error)}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="birthday"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <DatePickerInput
                    value={field.value}
                    onSelect={field.onChange}
                    endIcon={getStatusIcon(field.value, fieldState.error)}
                    placeholder="ДД/ММ/ГГ"
                    title="Дата рождения*"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          disabled={isPending || !form.formState.isDirty}
          type="submit"
          className="w-full"
          size={isMedium ? "medium" : "normal"}
        >
          {isPending && <LoaderIcon className="animate-spin" />}
          Сохранить
        </Button>
      </form>
    </Form>
  );
};

export default UserUpdateForm;
