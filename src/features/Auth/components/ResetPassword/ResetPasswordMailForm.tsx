import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/components/UI/Form";
import { useResetPasswordMailForm } from "../../hooks/useResetPasswordMailForm";
import { Input } from "@/shared/components/UI/Input";
import { Button } from "@/shared/components/UI/Button";
import { Dispatch, SetStateAction, useState } from "react";
import LoaderIcon from "@/shared/components/icons/LoaderIcon";
import ResetPasswordMailDialog from "./ResetPasswordMailDialog";

const ResetPasswordMailForm = ({
  setTab,
  onSuccess,
}: {
  setTab: Dispatch<SetStateAction<"login" | "resetPassword">>;
  onSuccess: () => void;
}) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { resetPasswordMailForm, onSubmit, isPending } =
    useResetPasswordMailForm({
      onSuccess: () => {
        setOpenDialog(true);
      },
    });
  return (
    <Form {...resetPasswordMailForm}>
      <form onSubmit={onSubmit} className="space-y-4">
        <FormField
          control={resetPasswordMailForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setTab("login")}
            className="link-hover text-darkGrey text-button-xs"
          >
            Войти в аккаунт
          </button>
        </div>
        <Button
          disabled={isPending}
          className="w-full"
          size="normal"
          type="submit"
        >
          {isPending && <LoaderIcon className="animate-spin" />}
          Отправить письмо
        </Button>
        <ResetPasswordMailDialog open={openDialog} setOpen={setOpenDialog} />
      </form>
    </Form>
  );
};

export default ResetPasswordMailForm;
