"use client";

import { useCreateComment } from "@/features/Reviews/api/reviewsMutationsApi";
import CreateReviewDialog from "@/features/Reviews/components/CreateReview/CreateReviewDialog";
import { CreateReviewFormInput } from "@/features/Reviews/components/CreateReview/CreateReviewForm";
import { useUser } from "@/shared/api/authApi";
import { Button } from "@/shared/components/UI/Button";
import StyledTooltip from "@/shared/components/UI/StyledTooltip";
import { useMemo, useState } from "react";
import SuccessReviewDialog from "./SuccessReviewDialog";

const CreateReviewButton = () => {
  const [openCreateForm, setOpenCreateForm] = useState<boolean>(false);
  const [openSuccess, setOpenSuccess] = useState<boolean>(false);

  const { data: user } = useUser();

  const { mutate: createComment, isPending } = useCreateComment({
    onSuccess: () => {
      setOpenCreateForm(false);
      setOpenSuccess(true);
    },
  });

  const defaultValues: Partial<CreateReviewFormInput> = useMemo(
    () => ({
      name: `${user?.first_name} ${user?.last_name}`,
    }),
    [user]
  );

  const onSubmit = async (data: CreateReviewFormInput) => {
    const address =
      user?.multiple_addresses.find((item) => item.isDefaultShipping) ||
      user?.multiple_addresses[0];

    try {
      const formData = new FormData();
      formData.append("post", String(1));
      formData.append("content", data.message);
      formData.append("author_name", data.name);
      formData.append("author_email", user?.email ?? "");
      formData.append("city", address?.city ?? "");
      formData.append("country", address?.country ?? "");

      createComment(formData);
    } catch (error) {
      console.error("Ошибка при отправке отзыва:", error);
    }
  };
  return (
    <div>
      <CreateReviewDialog
        open={openCreateForm}
        setOpen={setOpenCreateForm}
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        isPending={isPending}
        triggerProps={{ disabled: !user }}
      >
        <div
          className="w-full md:w-min"
          data-tooltip-id="create-review"
          data-tooltip-content="Авторизуйтесь, чтобы оставить отзыв"
        >
          <Button size="medium" className="w-full md:w-min" disabled={!user}>
            Написать отзыв
          </Button>
          {!user && <StyledTooltip id="create-review" />}
        </div>
      </CreateReviewDialog>
      <SuccessReviewDialog open={openSuccess} setOpen={setOpenSuccess} />
    </div>
  );
};

export default CreateReviewButton;
