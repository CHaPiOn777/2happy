import { env } from "@/config/env";
import { formattedApiInstance } from "./formattedApiInstance";
import { z } from "zod";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Имя должно содержать не менее 2 символов" })
    .max(50, { message: "Имя слишком длинное" }),
  email: z.string().email({ message: "Введите корректный email" }),
  title: z
    .string()
    .min(3, { message: "Тема сообщения должна содержать не менее 3 символов" })
    .max(150, { message: "Тема слишком длинная" }),
  message: z
    .string()
    .min(10, { message: "Сообщение должно содержать не менее 10 символов" })
    .max(280, { message: "Сообщение слишком длинное" }),
  agreement: z.boolean().refine((value) => value === true, {
    message: "Вы должны принять политику конфиденциальности",
  }),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export type ContactFormData = Omit<ContactFormInput, "agreement">;

const sendEmailURL = `${env.CUSTOM_API}/send-email`;

export const sendEmail = async (
  data: ContactFormData
): Promise<{ success: boolean }> => {
  const response = await formattedApiInstance.post<
    unknown,
    { success: boolean }
  >(sendEmailURL, data);

  return response;
};

export const useSendEmail = ({
  onSuccess,
  onError,
  ...options
}: UseMutationOptions<
  { success: boolean },
  AxiosError<{ success: boolean }>,
  ContactFormData,
  unknown
>) => {
  return useMutation({
    mutationFn: sendEmail,
    onSuccess,
    onError,
    ...options,
  });
};
