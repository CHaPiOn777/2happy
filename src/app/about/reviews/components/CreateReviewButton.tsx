"use client";

import {
  useCreateComment,
  useUploadMedia,
} from "@/features/Reviews/api/reviewsMutationsApi";
import CreateReviewDialog from "@/features/Reviews/components/CreateReview/CreateReviewDialog";
import { CreateReviewFormInput } from "@/features/Reviews/components/CreateReview/CreateReviewForm";
import { useUser } from "@/shared/api/authApi";
import { Button } from "@/shared/components/UI/Button";
import StyledTooltip from "@/shared/components/UI/StyledTooltip";
import { useMemo } from "react";

const CreateReviewButton = () => {
  const { data: user } = useUser();

  const { mutate: createComment } = useCreateComment();

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
    <CreateReviewDialog
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      isPending={false}
      triggerProps={{ disabled: !user }}
    >
      <div
        className="w-min"
        data-tooltip-id="create-review"
        data-tooltip-content="Авторизуйтесь, чтобы оставить отзыв"
      >
        <Button size="medium" disabled={!user}>
          Написать отзыв
        </Button>
        {!user && <StyledTooltip id="create-review" />}
      </div>
    </CreateReviewDialog>
  );
};

export default CreateReviewButton;
