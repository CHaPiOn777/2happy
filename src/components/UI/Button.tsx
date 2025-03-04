import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `inline-flex w-max items-center justify-center gap-2 whitespace-nowrap uppercase rounded-[2px] text-sm font-medium transition-colors duration-300 
  focus-visible:outline-none focus-visible:border-solid focus-visible:border-2 focus-visible:border-stroke-black 
  disabled:pointer-events-none disabled:bg-button-bg-disabled disabled:text-button-text-disabled disabled:svg-disabled 
  [&_svg]:pointer-events-none [&_svg]:size-[24px] [&_svg]:shrink-0 [&_svg]:transition-colors`,

  {
    variants: {
      variant: {
        primary: `text-button-primary-text bg-button-primary-bg 
          [&_svg]:fill-white
          hover:bg-button-primary-bg-hover hover:primary-svg-hover
          focus-visible:bg-button-primary-bg-focused active:primary-svg-active`,
        secondary: `text-button-secondary-text border-[1px] border-stroke-black 
          hover:bg-button-secondary-bg-hover hover:text-button-secondary-text-hover hover:border-stroke-grey hover:secondary-svg-hover
          focus-visible:bg-button-secondary-bg-focused 
          active:border-[1px] active:bg-button-secondary-bg-active active:secondary-svg-active`,

        tertiary: `text-button-tertiary-text bg-button-tertiary-bg 
          hover:bg-button-tertiary-bg-hover hover:text-button-tertiary-text-hover hover:tertiary-svg-hover 
          focus-visible:border-2 focus-visible:border-stroke-black focus-visible:text-button-tertiary-text-focused focus-visible:bg-button-tertiary-bg-focused focus-visible:tertiary-svg-focused 
          active:border-0 active:bg-button-tertiary-bg-active active:text-button-tertiary-text-active active:tertiary-svg-active`,
      },
      size: {
        large: "h-[64px] px-[32px] py-[20px] text-[20px]/[24px",
        normal: "h-[56px] px-[32px] py-[16px] text-[16px]/[24px]",
        medium:
          "h-[48px] px-[32px] py-[14px] text-[16px]/[20px] [&_svg]:size-[16px]",
        small:
          "h-[40px] px-[24px] py-[12px] text-[14px]/[16px] [&_svg]:size-[16px]",
        extraSmall:
          "h-[32px] px-[24px] py-[8px] text-[20px]/[24px] normal-case [&_svg]:size-[16px]",
        iconLarge: "h-[64px] p-[20px]",
        iconNormal: "h-[56px] p-[16px]",
        iconMedium: "h-[48px] p-[12px]",
        iconSmall: "h-[40px] p-[8px]",
        iconXS: "h-[32px] p-[8px] [&_svg]:size-[16px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "normal",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
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

export { Button, buttonVariants };
