"use client";

import AppleIcon from "@/shared/components/icons/Social/AppleIcon";
import GoogleIcon from "@/shared/components/icons/Social/GoogleIcon";
import { Button } from "@/shared/components/UI/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/UI/Dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/UI/Tabs";
import { ComponentPropsWithoutRef, ReactNode, useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import CloseIcon from "@/shared/components/icons/CloseIcon";

const AuthModal = ({
  children,
  defaultTab = "login",
  buttonSlot,
  triggerProps,
  onSuccess,
}: {
  children: ReactNode;
  defaultTab?: "login" | "register";
  buttonSlot?: ReactNode;
  triggerProps?: ComponentPropsWithoutRef<typeof DialogTrigger>;
  onSuccess?: () => void;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOnSuccess = () => {
    setOpen(false);

    onSuccess?.();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (triggerProps?.disabled) setOpen(false);
        else setOpen(open);
      }}
    >
      <DialogTrigger
        className="disabled:pointer-events-none disabled:opacity-60"
        {...triggerProps}
      >
        {children}
      </DialogTrigger>
      <DialogContent
        hideClose
        className="px-4 xs:px-6 sm:px-8 gap-10"
        closeClassName="top-10 right-8"
      >
        <DialogHeader className="justify-between flex-row items-end">
          <DialogTitle>Войдите или создайте аккаунт</DialogTitle>
          <DialogClose>
            <CloseIcon />
          </DialogClose>
        </DialogHeader>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Tabs defaultValue={defaultTab}>
              <TabsList borderClass="bg-light-disabled">
                <TabsTrigger className="uppercase" value="login">
                  Войти
                </TabsTrigger>
                <TabsTrigger className="uppercase" value="register">
                  Создать аккаунт
                </TabsTrigger>
              </TabsList>
              <TabsContent className="w-full mt-8 ring-0" value="login">
                <LoginForm onSuccess={handleOnSuccess} />
              </TabsContent>
              <TabsContent className="w-full mt-8 ring-0" value="register">
                <RegisterForm onSuccess={handleOnSuccess} />
              </TabsContent>
            </Tabs>
            {buttonSlot}
          </div>

          <span className="flex gap-2 items-center uppercase text-gray after:w-full after:h-[1px] after:bg-gray before:w-full before:h-[1px] before:bg-gray">
            Или
          </span>
          <div className="flex flex-col gap-4">
            <Button variant="secondary" size="normal" className="w-full">
              <GoogleIcon />
              Войти через Google
            </Button>
            <Button variant="secondary" size="normal" className="w-full">
              <AppleIcon />
              Войти через Apple
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
