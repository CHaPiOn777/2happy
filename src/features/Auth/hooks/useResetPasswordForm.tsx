import {
  ResetPasswordInput,
  resetPasswordInputSchema,
  useResetPassword,
} from "@/shared/api/authApi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { notify } from "@/shared/lib/notify";

export const useResetPasswordForm = ({
  key,
  login,
  onSettled,
}: {
  key: string;
  login: string;
  onSettled?: () => void;
}) => {
  const resetPasswordForm = useForm({
    resolver: zodResolver(resetPasswordInputSchema),
    defaultValues: {
      password: "",
      repeatPassword: "",
    },
  });

  const { mutate, isPending } = useResetPassword({
    onSuccess: () => {
      notify({ message: "Пароль успешно изменен", variant: "success" });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.status === 400) {
          notify({ message: "Истек срок действия ключа.", variant: "error" });
        }
        if (error.status === 404) {
          notify({
            message: "Пользователь с таким логином не найден.",
            variant: "error",
          });
        }
      } else {
        notify({
          message: "Неизвестная ошибка, приносим извинения",
          variant: "error",
        });
      }
    },
    onSettled,
  });

  return {
    resetPasswordForm,
    onSubmit: resetPasswordForm.handleSubmit((data: ResetPasswordInput) => {
      const body = {
        password: data.password,
        key: key,
        login: login,
      };

      mutate(body);
    }),
    isPending,
  };
};
