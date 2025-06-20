"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/shared/utils";

const AddressRadioGroup = React.forwardRef<
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
AddressRadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const AddressRadioGroupItemIndicator = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Indicator>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Indicator
      ref={ref}
      className={cn(
        "flex items-center justify-center cursor-pointer",
        className
      )}
      {...props}
    >
      <Circle className="h-2.5 w-2.5 fill-primary" />
    </RadioGroupPrimitive.Indicator>
  );
});
AddressRadioGroupItemIndicator.displayName = "AddressGroupItemIndicator";

const AddressRadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    rightSlot?: React.ReactNode;
    leftSlot?: React.ReactNode;
  }
>(
  (
    { className, id, children, rightSlot, leftSlot, disabled, ...props },
    ref
  ) => {
    return (
      <div
        className={cn(
          "flex flex-col md:flex-row items-center gap-6 px-6 pb-6 md:pb-0 border border-main",
          disabled && "border-gray cursor-not-allowed"
        )}
      >
        <label
          htmlFor={id}
          className="flex flex-col gap-6 items-start pt-6 md:py-6 lg:items-center w-full lg:flex-row"
        >
          <div className="flex gap-2.5 ">
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
              <RadioGroupPrimitive.Indicator
                className={"flex items-center justify-center cursor-pointer"}
                {...props}
              >
                <Circle className="h-2.5 w-2.5 fill-primary" />
              </RadioGroupPrimitive.Indicator>
            </RadioGroupPrimitive.Item>

            {leftSlot}
          </div>

          <div
            className={cn(
              "flex-1 cursor-pointer",
              disabled && "cursor-not-allowed"
            )}
          >
            {children}
          </div>
        </label>
        {rightSlot}
      </div>
    );
  }
);
AddressRadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { AddressRadioGroup, AddressRadioGroupItem };
