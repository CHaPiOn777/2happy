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
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import CreateReviewFormImages from "./CreateReviewFormImages";
import LoaderIcon from "@/shared/components/icons/LoaderIcon";

export const createReviewFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Имя должно содержать не менее 2 символов" })
    .max(50, { message: "Имя слишком длинное" }),
  message: z
    .string()
    .min(10, { message: "Сообщение должно содержать не менее 10 символов" })
    .max(280, { message: "Сообщение слишком длинное" }),
  images: z
    .array(
      z
        .instanceof(File)
        .refine((file) => file.type.startsWith("image/"), {
          message: "Можно загружать только изображения",
        })
        .refine((file) => file.size <= 5 * 1024 * 1024, {
          message: "Максимальный размер файла — 5MB",
        })
    )
    .max(5, { message: "Максимум 5 изображений" })
    .optional(),
});

export type CreateReviewFormInput = z.infer<typeof createReviewFormSchema>;

const CreateReviewForm = ({
  defaultValues,
  onSubmit,
  isPending,
  className,
  ...props
}: {
  defaultValues?: Partial<CreateReviewFormInput>;
  onSubmit: (data: CreateReviewFormInput) => void;
  isPending: boolean;
  className?: string;
}) => {
  const [step, setStep] = useState<"info" | "images">("info");

  const form = useForm<CreateReviewFormInput>({
    resolver: zodResolver(createReviewFormSchema),
    mode: "onChange",
    defaultValues: {
      name: defaultValues?.name ?? "",
      message: defaultValues?.message ?? "",
      images: [],
    },
  });

  return (
    <div className="space-y-6">
      <div className="text-gray-middle">
        Шаг {step === "images" ? "2" : "1"} из 2
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn("space-y-12", className)}
        >
          {step === "info" && (
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="message"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Ваши впечатления о товаре"
                        rows={5}
                        maxLength={280}
                        className="max-h-[300px]"
                        error={fieldState.error}
                        showCharLimit
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-2 items-center">
                    <FormLabel className="flex-1">Имя</FormLabel>
                    <FormControl>
                      <Input placeholder="Ваше имя" {...field} />
                    </FormControl>
                    <div className="col-start-2">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>
          )}

          <CreateReviewFormImages
            className={`${step != "images" && "hidden"}`}
            defaultImages={form.getValues().images}
            onAddImage={(files) => {
              form.setValue("images", files);
            }}
          />

          {step === "info" && (
            <div className="flex gap-8">
              <Button
                variant="secondary"
                size="large"
                className="w-full"
                disabled={
                  !!form.getFieldState("message").error ||
                  !form.getValues().message.length ||
                  !!form.getFieldState("name").error ||
                  !form.getValues().name.length ||
                  isPending
                }
                type="submit"
              >
                {isPending && <LoaderIcon className="animate-spin" />}
                Отправить
              </Button>
            </div>
          )}

          {step === "images" && (
            <div className="flex gap-8">
              <Button
                variant="secondary"
                size="large"
                className="w-full"
                onClick={() => {
                  setStep("info");
                }}
                disabled={isPending}
              >
                Назад
              </Button>
              <Button
                size="large"
                className="w-full"
                type="submit"
                disabled={
                  !!form.getFieldState("message").error ||
                  !form.getValues().message.length ||
                  !!form.getFieldState("name").error ||
                  !form.getValues().name.length ||
                  isPending
                }
              >
                Опубликовать
              </Button>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default CreateReviewForm;
