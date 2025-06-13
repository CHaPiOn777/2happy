"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/UI/Dialog";
import {
  ComponentPropsWithoutRef,
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react";
import CreateReviewForm, { CreateReviewFormInput } from "./CreateReviewForm";

const CreateReviewDialog = ({
  open,
  setOpen,
  defaultValues,
  children,
  onSubmit,
  isPending,
  triggerProps,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  defaultValues: Partial<CreateReviewFormInput>;
  children: ReactNode;
  onSubmit: (data: CreateReviewFormInput) => void;
  isPending: boolean;
  triggerProps?: ComponentPropsWithoutRef<typeof DialogTrigger>;
}) => {
  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (triggerProps?.disabled) setOpen(false);
        else setOpen(open);
      }}
    >
      <DialogTrigger asChild {...triggerProps}>
        {children}
      </DialogTrigger>

      <DialogContent className="gap-2 px-14 py-10 max-w-[832px] w-full">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-h4">Написать отзыв</DialogTitle>
          <DialogDescription className="sr-only">
            Напишите ваш отзыв
          </DialogDescription>
        </DialogHeader>

        <CreateReviewForm
          defaultValues={defaultValues}
          onSubmit={onSubmit}
          isPending={isPending}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CreateReviewDialog;
