import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/utils/cn";
import { Skeleton } from "./Skeleton";
import { GlobalMediaKeys } from "@/shared/styles/globalStyles";

const buttonVariantsAndSizes = {
  variants: {
    variant: {
      primary: `text-button-primary-text bg-button-primary-bg
        [&_svg]:fill-white
        hover:bg-button-primary-bg-hover hover:primary-svg-hover
        focus-visible:bg-button-primary-bg-focused 
        active:bg-button-primary-bg-click`,

      secondary: `text-button-secondary-text border-[1px] border-stroke-black bg-button-secondary-bg 
        hover:bg-button-secondary-bg-hover hover:text-button-secondary-text-hover hover:border-stroke-darkGrey hover:secondary-svg-hover
        focus-visible:bg-button-secondary-bg-focused
        active:border-[1px] active:text-button-secondary-text-click active:bg-button-secondary-bg-click active:bg-none
        after:opacity-0 hover:after:opacity-100`,

      tertiary: `text-button-tertiary-text bg-button-tertiary-bg
        hover:bg-button-tertiary-bg-hover hover:text-button-tertiary-text-hover hover:tertiary-svg-hover
        focus-visible:border-2 focus-visible:border-stroke-black focus-visible:text-button-tertiary-text-focused focus-visible:bg-button-tertiary-bg-focused focus-visible:tertiary-svg-focused 
        active:border-0 active:bg-button-tertiary-bg-click active:text-button-tertiary-text-click active:tertiary-svg-active
        after:opacity-0 hover:after:opacity-100`,
    },
    size: {
      large: "h-[64px] px-[32px] py-[20px] text-button-large",
      normal: "h-[56px] px-[32px] py-[16px] text-button-normal",
      medium:
        "h-[48px] px-[32px] py-[14px] text-button-medium [&_svg]:size-[16px]",
      small:
        "h-[40px] px-[24px] py-[12px] text-button-small [&_svg]:size-[16px]",
      extraSmall:
        "h-[32px] px-[24px] py-[8px] text-button-xs normal-case [&_svg]:size-[16px]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "normal",
  },
};

const buttonVariants = cva(
  `relative inline-flex w-max items-center justify-center gap-2 whitespace-nowrap uppercase rounded-xs font-medium transition-all duration-300 
  focus-visible:outline-none focus-visible:border-solid focus-visible:border-2 focus-visible:border-stroke-black 
  disabled:pointer-events-none disabled:border-disabled  disabled:bg-button-bg-disabled disabled:text-button-text-disabled disabled:svg-disabled disabled:border-0 
  after:absolute after:w-full after:h-full after:bg-radial-gradient after:transition-opacity after:left-0
  [&_svg]:pointer-events-none [&_svg]:size-[24px] [&_svg]:shrink-0 [&_svg]:transition-colors`,

  {
    variants: buttonVariantsAndSizes.variants,
    defaultVariants: {
      variant: "primary",
      size: "normal",
    },
  }
);

export type TButtonVariant = VariantProps<typeof buttonVariants>["variant"];
export type TButtonSizes = VariantProps<typeof buttonVariants>["size"];

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  mediaVariants?: Record<GlobalMediaKeys, NonNullable<TButtonVariant>>;
  mediaSizes?: Record<GlobalMediaKeys, NonNullable<TButtonSizes>>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export interface ButtonLoaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonVariants> {}

const ButtonLoader = ({
  className,
  size = "normal",
  ...props
}: ButtonLoaderProps) => {
  return (
    <Skeleton
      className={cn(
        "w-32 duration-1000",
        className,
        buttonVariantsAndSizes.variants.size[size ?? "normal"]
      )}
      {...props}
    />
  );
};

ButtonLoader.displayName = "ButtonLoader";

export { Button, ButtonLoader, buttonVariants };
