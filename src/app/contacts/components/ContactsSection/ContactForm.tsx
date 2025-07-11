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
import { Textarea } from "@/shared/components/UI/Textarea";
import { cn } from "@/shared/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentPropsWithoutRef } from "react";
import LoaderIcon from "@/shared/components/icons/LoaderIcon";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/shared/components/UI/Checkbox";
import { ContactFormInput, contactFormSchema } from "@/shared/api/mailApi";

const ContactsForm = ({
  onSubmit,
  isPending,
  className,
  ...props
}: {
  onSubmit: (data: ContactFormInput) => void;
  isPending: boolean;
} & Omit<ComponentPropsWithoutRef<"form">, "onSubmit">) => {
  const form = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      title: "",
      message: "",
      agreement: false,
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-8 sm:space-y-12", className)}
        {...props}
      >
        <div className="space-y-4">
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Имя" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Тема сообщения" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Ваше сообщение"
                      rows={5}
                      showCharLimit
                      maxLength={280}
                      className="max-h-[300px]"
                      error={fieldState.error}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
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
                  ознакомление <br /> с «Политикой конфиденциальности» .
                </FormLabel>
              </FormItem>
            )}
          />
        </div>

        <Button
          disabled={isPending || !form.formState.isDirty}
          type="submit"
          className="w-full"
        >
          {isPending && <LoaderIcon className="animate-spin mr-2" />}
          Отправить
        </Button>
      </form>
    </Form>
  );
};

export default ContactsForm;
