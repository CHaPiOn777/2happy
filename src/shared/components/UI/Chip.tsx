import { cn } from "@/shared/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const chipVariants = cva(`flex rounded-xs text-white whitespace-nowrap w-min`, {
  variants: {
    variant: {
      red: "bg-red",
      pink: "text-red bg-status-muted-error",
      yellow: "bg-yellow",
      gray: "text-gray-dark bg-gray-light",
      green: "bg-green",
      black: "bg-main",
    },
    size: {
      normal: "text-button-small p-2",
      medium: "text-button-xs p-3",
      small: "text-description md:text-button-xs md:py-1 px-2",
    },
  },
  defaultVariants: {
    variant: "gray",
    size: "normal",
  },
});

export type ChipVariant = NonNullable<
  VariantProps<typeof chipVariants>["variant"]
>;
export type ChipSize = NonNullable<VariantProps<typeof chipVariants>["size"]>;

export interface ChipProps
  extends ComponentPropsWithoutRef<"span">,
    VariantProps<typeof chipVariants> {}

const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <span
        className={cn(chipVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Chip.displayName = "Chip";

export { Chip, chipVariants };
