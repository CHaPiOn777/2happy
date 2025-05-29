"use client";

import { useGetToken, useUser } from "@/shared/api/authApi";
import { Button } from "@/shared/components/UI/Button";
import { Form } from "@/shared/components/UI/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PasswordInput from "@/features/Auth/components/PasswordInput";
import {
  ChangePasswordInput,
  changePasswordSchema,
  useChangePassword,
} from "../api/updateUserApi";
import { notify } from "@/shared/lib/notify";
import LoaderIcon from "@/shared/components/icons/LoaderIcon";

const UserChangePasswordForm = () => {
  const form = useForm<ChangePasswordInput>({
    resolver: zodResolver(changePasswordSchema),
    mode: "onChange",
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const getToken = useGetToken();

  const { mutate: changePassword, isPending } = useChangePassword({
    onSuccess: (_, variables) => {
      getToken(variables.data.newPassword);
      notify({ message: "Пароль успешно изменен", variant: "success" });
      form.reset();
    },
    onError: (err) => {
      notify({ variant: "error", message: err.response?.data.message ?? "" });
    },
  });

  function onSubmit(data: ChangePasswordInput) {
    if (!data) return;

    changePassword({ data });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
        <div className="grid grid-cols-2 gap-6">
          <PasswordInput
            name="currentPassword"
            control={form.control}
            placeholder="Текущий пароль*"
          />
          <div />
          <PasswordInput
            name="newPassword"
            control={form.control}
            placeholder="Новый пароль*"
          />
          <PasswordInput
            name="confirmPassword"
            control={form.control}
            placeholder="Подтвердите пароль*"
          />
        </div>
        <Button
          disabled={isPending || !form.formState.isDirty}
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

export default UserChangePasswordForm;
