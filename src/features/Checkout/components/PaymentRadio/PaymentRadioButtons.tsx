"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/shared/utils";

const PaymentRadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("flex flex-col gap-6", className)}
      {...props}
      ref={ref}
    />
  );
});
PaymentRadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const PaymentRadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    rightSlot?: React.ReactNode;
  }
>(({ className, id, children, rightSlot, disabled, ...props }, ref) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 px-5 border border-main cursor-pointer",
        disabled && "border-gray cursor-not-allowed"
      )}
    >
      <RadioGroupPrimitive.Item
        ref={ref}
        id={id}
        disabled={disabled}
        className={cn(
          "aspect-square h-6 w-6 rounded-full border border-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center cursor-pointer">
          <Circle className="h-2.5 w-2.5 fill-primary" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <label
        className={cn(
          "flex-1 py-4 text-gray-middle text-placeholder cursor-pointer",
          disabled && "cursor-not-allowed"
        )}
        htmlFor={id}
      >
        {children}
      </label>
      {rightSlot}
    </div>
  );
});
PaymentRadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { PaymentRadioGroup, PaymentRadioGroupItem };
