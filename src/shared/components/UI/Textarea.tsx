"use client";

import * as React from "react";
import { cn } from "@/shared/utils";
import { FieldError } from "react-hook-form";

interface TextareaProps extends React.ComponentProps<"textarea"> {
  showCharLimit?: boolean;
  maxLength?: number;
  error?: FieldError;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { value, className, maxLength, showCharLimit = true, error, ...props },
    ref
  ) => {
    // const [value, setValue] = React.useState(props.value?.toString() ?? "");

    // const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //   setValue(e.target.value);
    //   props.onChange?.(e);
    // };

    return (
      <div className="space-y-2">
        <textarea
          className={cn(
            "flex min-h-[60px] w-full rounded-xs border border-main bg-transparent px-3 py-2 text-placeholder cursor-pointer placeholder:text-gray-middle focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          maxLength={maxLength}
          value={value}
          {...props}
        />
        {showCharLimit && maxLength && (
          <div className="w-full flex justify-between text-description text-gray-middle">
            <span className="text-red text-button-xs">{error?.message}</span>
            {typeof value === "string" && (
              <span>
                {value.length}/{maxLength}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
