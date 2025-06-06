import * as React from "react";

import { cn } from "@/shared/utils/cn";

export type InputProps = React.ComponentProps<"input"> & {
  title?: string;
  wrapperClassName?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  hasError?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      wrapperClassName,
      type,
      title,
      startIcon,
      endIcon,
      hasError = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          "flex flex-col px-5 w-full rounded-xs border border-stroke-black transition-colors hover:ring-[1px] focus-within:ring-[1px] ring-black [&_svg]:shrink-0 [&_svg]:size-6",
          hasError && "border-red bg-status-muted-error ring-red",
          title && "py-2",
          wrapperClassName
        )}
      >
        <div className="flex items-center gap-2">
          {startIcon}
          <div className="flex flex-col w-full">
            <span className="text-title text-gray-middle">{title}</span>
            <input
              type={type}
              className={cn(
                "flex w-full py-4 rounded-md bg-transparent text-placeholder autofill:shadow-[inset_0_0_1000px] autofill:shadow-status-muted-warning file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-middle focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                hasError && "autofill:shadow-status-muted-error",
                title && "py-0",
                className
              )}
              ref={ref}
              {...props}
            />
          </div>
          {endIcon}
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
