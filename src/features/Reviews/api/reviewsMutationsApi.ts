import { formattedApiInstance } from "@/shared/api/formattedApiInstance";
import { WPMediaResponse } from "@/shared/types/other";
import { useMutation } from "@tanstack/react-query";

const uploadMediaURL = `/wp/v2/media`;

export const uploadMedia = async (data: FormData): Promise<WPMediaResponse> => {
  const response = await formattedApiInstance.post<unknown, WPMediaResponse>(
    uploadMediaURL,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response;
};

export const useUploadMedia = () => {
  return useMutation({
    mutationFn: uploadMedia,
  });
};

const createCommentURL = `/wp/v2/comments`;

export const createComment = async (data: FormData): Promise<{ bo: true }> => {
  const response = await formattedApiInstance.post<unknown, { bo: true }>(
    createCommentURL,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response;
};

export const useCreateComment = () => {
  return useMutation({
    mutationFn: createComment,
  });
};
