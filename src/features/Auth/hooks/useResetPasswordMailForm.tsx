import {
  ResetPasswordMailInput,
  resetPasswordMailInputSchema,
  useSendResetPasswordMail,
} from "@/shared/api/authApi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { AxiosError } from "axios";

export const useResetPasswordMailForm = ({
  onSuccess,
}: {
  onSuccess?: () => void;
}) => {
  const [error, setError] = useState<string>("");
  const resetPasswordMailForm = useForm({
    resolver: zodResolver(resetPasswordMailInputSchema),
    defaultValues: {
      email: "",
    },
  });

  const { mutate, isPending } = useSendResetPasswordMail({
    onSuccess,
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.status === 400) {
          setError("Неверный адрес электронной почты");
        }
      } else {
        setError("Неизвестная ошибка, приносим извинения");
      }
    },
  });

  return {
    resetPasswordMailForm,
    onSubmit: resetPasswordMailForm.handleSubmit(
      (data: ResetPasswordMailInput) => mutate(data)
    ),
    isPending,
    error,
    clearError: () => setError(""),
  };
};
