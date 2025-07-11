import { RegisterInput, registerInputSchema } from "@/shared/api/authApi";
import { useForm } from "react-hook-form";
import { getStatusIcon } from "@/shared/utils/getStatusIconForInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubscribeEmailType } from "@/shared/api/mailApi";

export const useRegisterForm = ({
  mutateFn,
  registerSubscriber,
}: {
  mutateFn: (value: RegisterInput) => void;
  registerSubscriber: (value: SubscribeEmailType) => void;
}) => {
  const registerForm = useForm({
    mode: "onChange",
    resolver: zodResolver(registerInputSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      politic: false,
      notifications: false,
    },
  });

  const onSubmit = (values: RegisterInput) => {
    mutateFn(values);
    if (values.notifications)
      registerSubscriber({
        firstName: values.name,
        lastName: "",
        email: values.email,
      });
  };

  return { registerForm, getStatusIcon, onSubmit };
};
