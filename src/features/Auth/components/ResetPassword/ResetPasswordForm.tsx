import { Form } from "@/shared/components/UI/Form";
import { useResetPasswordForm } from "../../hooks/useResetPasswordForm";
import PasswordInput from "../PasswordInput";
import LoaderIcon from "@/shared/components/icons/LoaderIcon";
import { Button } from "@/shared/components/UI/Button";

const ResetPasswordForm = ({
  uniqueKey,
  login,
  onSettled,
}: {
  uniqueKey: string;
  login: string;
  onSettled: () => void;
}) => {
  const { resetPasswordForm, onSubmit, isPending } = useResetPasswordForm({
    key: uniqueKey,
    login,
    onSettled,
  });

  return (
    <Form {...resetPasswordForm}>
      <form onSubmit={onSubmit} className="space-y-8">
        <div className="space-y-4">
          <PasswordInput control={resetPasswordForm.control} name="password" />
          <PasswordInput
            control={resetPasswordForm.control}
            name="repeatPassword"
          />
        </div>
        <Button
          disabled={isPending}
          className="w-full"
          size="normal"
          type="submit"
        >
          {isPending && <LoaderIcon className="animate-spin" />}
          Изменить пароль
        </Button>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
