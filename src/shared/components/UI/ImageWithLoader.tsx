"use client";

import { cn } from "@/shared/utils/cn";
import Image, { ImageProps } from "next/image";
import { RefObject, useEffect, useState } from "react";

const ImageWithLoader = ({
  wrapperClassName,
  className,
  src,
  alt,
  ref,
  ...props
}: {
  wrapperClassName?: string;
  ref?: RefObject<HTMLImageElement | null>;
} & ImageProps) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(false);

  const onLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  return (
    <div className={cn("relative w-full h-full", wrapperClassName)}>
      <div
        className={cn(
          `absolute flex justify-center items-center w-full h-full z-10 bg-white opacity-0 transition-opacity`,
          isLoading && "opacity-100"
        )}
      >
        <span className="animate-pulse font-akira text-3xl">2HAPPY</span>
      </div>
      <Image
        fill
        ref={ref}
        src={imageSrc}
        sizes="100%"
        className={cn("object-cover object-top", className)}
        onLoad={onLoad}
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default ImageWithLoader;
