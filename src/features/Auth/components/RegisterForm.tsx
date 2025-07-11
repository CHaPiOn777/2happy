"use client";

import { Button } from "@/shared/components/UI/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/UI/Form";
import { Input } from "@/shared/components/UI/Input";
import { Checkbox } from "@/shared/components/UI/Checkbox";
import Link from "next/link";
import { useRegisterForm } from "../hooks/useRegisterForm";
import PasswordInput from "./PasswordInput";
import LoaderIcon from "@/shared/components/icons/LoaderIcon";
import { useRegister } from "@/shared/api/authApi";
import { useSubscribeUserToMail } from "@/shared/api/mailApi";

const RegisterForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const { mutate, isPending } = useRegister({ onSuccess });
  const { mutate: subscribeToMail } = useSubscribeUserToMail();

  const { registerForm, getStatusIcon, onSubmit } = useRegisterForm({
    mutateFn: mutate,
    registerSubscriber: subscribeToMail,
  });
  return (
    <Form {...registerForm}>
      <form
        onSubmit={registerForm.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={registerForm.control}
          name="name"
          render={({ field, fieldState }) => {
            return (
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
            );
          }}
        />
        <FormField
          control={registerForm.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  endIcon={getStatusIcon(field.value, fieldState.error)}
                  hasError={!!fieldState.error}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <PasswordInput name="password" control={registerForm.control} />
        <PasswordInput
          name="repeatPassword"
          control={registerForm.control}
          placeholder="Повторите пароль"
        />

        <FormField
          control={registerForm.control}
          name="politic"
          render={({ field, fieldState }) => (
            <FormItem className="flex-row items-start">
              <FormControl>
                <Checkbox
                  className={`${
                    fieldState.error ? "shadow-sm shadow-red border-red" : ""
                  }`}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-gray-dark mt-0">
                Подтверждаю свое согласие на обработку персональных данных и
                ознакомление с 
                <Link className="text-main underline" href="/">
                  «Политикой конфиденциальности»
                </Link>
                .
              </FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={registerForm.control}
          name="notifications"
          render={({ field }) => (
            <FormItem className="flex-row items-center">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-gray-dark mt-0">
                Подписаться на рассылку о новых коллекциях, распродажах.
              </FormLabel>
            </FormItem>
          )}
        />
        <Button
          disabled={isPending}
          className="w-full mt-4"
          size="normal"
          type="submit"
        >
          {isPending && <LoaderIcon className="animate-spin" />}
          Зарегистрироваться
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
