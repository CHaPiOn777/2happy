"use client";

import CloseIcon from "@/shared/components/icons/CloseIcon";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/UI/Dialog";
import ResetPasswordForm from "./ResetPasswordForm";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { paths } from "@/config/paths";

const ResetPasswordDialog = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const key = searchParams.get("key");
  const login = searchParams.get("login");

  useEffect(() => {
    if (!key || !login) router.replace(paths.home.getHref());
  }, []);

  if (!key || !login) return null;

  return (
    <Dialog open={true}>
      <DialogContent
        hideClose
        className="px-4 pr-0 xs:pr-4 xs:px-6 sm:px-8 gap-10 max-h-[95vh] overflow-hidden"
      >
        <DialogHeader className="pr-4 xs:pr-0 justify-between flex-row items-end">
          <DialogTitle className="text-h5">Восстановление пароля</DialogTitle>
          <DialogClose onClick={() => router.back()}>
            <CloseIcon />
          </DialogClose>
        </DialogHeader>
        <ResetPasswordForm
          uniqueKey={key}
          login={login}
          onSettled={() => {
            router.back();
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ResetPasswordDialog;
