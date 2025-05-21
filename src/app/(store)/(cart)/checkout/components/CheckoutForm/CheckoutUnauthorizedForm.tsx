"use client";

import GoogleLoginButton from "@/features/Auth/components/GoogleLoginButton";
import { useUser } from "@/shared/api/authApi";
import AppleIcon from "@/shared/components/icons/Social/AppleIcon";
import GoogleIcon from "@/shared/components/icons/Social/GoogleIcon";
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
import { Separator } from "@/shared/components/UI/Separator";
import { getStatusIcon } from "@/shared/utils/getStatusIconForInput";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactsForm = z.object({
  email: z.string().email("Некорректный email"),
  firstName: z.string().nonempty("Имя обязательно"),
  lastName: z.string().nonempty("Фамилия обязательна"),
  address: z.string().nonempty("Адрес обязателен"),
  postalCode: z.string().nonempty("Почтовый индекс обязателен"),
  country: z.string().nonempty("Страна обязательна"),
  region: z.string().optional(),
  city: z.string().nonempty("Город обязателен"),
  phone: z
    .string()
    .nonempty("Телефон обязателен")
    .min(10, "Телефон должен содержать не меньше 10 символов"),
  subscribe: z.boolean().optional(),
  agreement: z.boolean().refine((value) => value === true, {
    message: "Вы должны принять политику конфиденциальности",
  }),
});

export type CheckoutUnauthorizedInput = z.infer<typeof contactsForm>;

const CheckoutUnauthorizedForm = ({
  defaultValues,
  onSubmit,
}: {
  onSubmit: (data: CheckoutUnauthorizedInput) => void;
  defaultValues: CheckoutUnauthorizedInput | null;
}) => {
  const form = useForm<z.infer<typeof contactsForm>>({
    resolver: zodResolver(contactsForm),
    defaultValues: {
      email: defaultValues?.email ?? "",
      firstName: defaultValues?.firstName ?? "",
      lastName: defaultValues?.lastName ?? "",
      address: defaultValues?.address ?? "",
      postalCode: defaultValues?.postalCode ?? "",
      country: defaultValues?.country ?? "",
      region: defaultValues?.region ?? "",
      city: defaultValues?.city ?? "",
      phone: defaultValues?.phone ?? "",
      subscribe: defaultValues?.subscribe ?? false,
      agreement: defaultValues?.agreement ?? false,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col gap-8">
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
          <div className="flex flex-col gap-4 max-w-[448px] w-full">
            <GoogleLoginButton callbackUrl="/checkout" />
            {/* <Button variant="secondary" size="normal" className="w-full">
              <AppleIcon />
              Войти через Apple
            </Button> */}
          </div>
        </div>
        <Separator className="my-10" />
        <div className="grid grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Имя"
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
            name="lastName"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input
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
            control={form.control}
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
            control={form.control}
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
            control={form.control}
            name="region"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Область / Регион"
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
            control={form.control}
            name="phone"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <PhoneInput
                    {...field}
                    hasError={!!fieldState.error}
                    endIcon={getStatusIcon(field.value, fieldState.error)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-4">
          {/* <FormField
            control={form.control}
            name="subscribe"
            render={({ field }) => (
              <FormItem className="flex-row items-center">
                <FormControl>
                  <Checkbox
                    className="size-6"
                    checked={field.value ?? false}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="mt-0 text-button-xs text-gray-dark">
                  Подписаться на рассылку о новых коллекциях, распродажах.
                </FormLabel>
              </FormItem>
            )}
          /> */}

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

export default CheckoutUnauthorizedForm;
