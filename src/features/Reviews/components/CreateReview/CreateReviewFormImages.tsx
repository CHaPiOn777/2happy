import FileIcon from "@/shared/components/icons/FileIcon";
import RoundCheckIcon from "@/shared/components/icons/RoundCheckIcon";
import RoundXIcon from "@/shared/components/icons/RoundXIcon";
import { ScrollArea, ScrollBar } from "@/shared/components/UI/ScrollArea";
import { notify } from "@/shared/lib/notify";
import { cn } from "@/shared/utils";
import Image from "next/image";
import React, {
  ComponentPropsWithoutRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useDropzone } from "react-dropzone";

const blobImageLoader = ({ src }: { src: string }) => src;

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const CreateReviewFormImages = ({
  defaultImages = [],
  onAddImage,
  className,
  ...props
}: {
  defaultImages?: File[];
  onAddImage: (acceptedFiles: File[]) => void;
} & ComponentPropsWithoutRef<"div">) => {
  const [images, setImages] = useState<File[]>(defaultImages);
  const [previews, setPreviews] = useState<{ id: string; url: string }[]>([]);

  const onDropRejected = useCallback(() => {
    notify({
      variant: "error",
      message: "Некоторые файлы превышают размер 5 Мб и не были загружены",
    });
  }, []);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImages((prev) => [...prev, ...acceptedFiles]);

    onAddImage(acceptedFiles);
  }, []);

  useEffect(() => {
    const newPreviews = images.map((file) => ({
      id: file.name,
      url: URL.createObjectURL(file),
    }));
    setPreviews(newPreviews);
  }, [images]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/webp": [],
    },
    maxSize: MAX_FILE_SIZE,
    onDrop,
    onDropRejected,
  });

  return (
    <div className={cn("space-y-4", className)} {...props}>
      <div
        {...getRootProps()}
        className="flex cursor-pointer flex-col items-center justify-center rounded border border-dashed border-main pt-10 pb-14 text-center hover:bg-gray-50"
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-4">
          <FileIcon />
          {isDragActive ? (
            <p className="cursor-pointer">Перетащите файл сюда...</p>
          ) : (
            <p className="cursor-pointer">
              Перетащите файлы сюда или нажмите, чтобы загрузить.
            </p>
          )}
        </div>
      </div>

      {previews.length > 0 && (
        <ScrollArea>
          <div className="flex gap-3">
            {previews.map((item) => (
              <div
                key={item.id}
                className="relative w-[150px] h-[220px] cursor-pointer"
              >
                <div className="flex items-center justify-center w-full h-full bg-main/20 z-10 cursor-pointer group">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setImages((prev) =>
                        prev.filter((image) => image.name !== item.id)
                      );
                      URL.revokeObjectURL(item.url);
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-white rounded-full p-1"
                    aria-label="Удалить изображение"
                  >
                    <RoundXIcon className="size-8 stroke-white" />
                  </button>
                  <RoundCheckIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stroke-white size-8 pointer-events-none group-hover:opacity-0" />
                </div>
                <Image
                  loader={blobImageLoader}
                  src={item.url}
                  alt={`preview-${item.id}`}
                  fill
                  className="object-cover object-center rounded -z-10"
                />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      )}
    </div>
  );
};

export default CreateReviewFormImages;
