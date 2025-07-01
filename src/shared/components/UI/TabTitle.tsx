import { cn } from "@/shared/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";

const TabTitle = ({
  children,
  titleClass,
  iconElement,
  className,
  ...props
}: {
  titleClass?: string;
  iconElement?: ReactNode;
} & ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn(
        "flex gap-2 items-center py-4 px-5 bg-light-disabled border border-gray rounded-xs",
        className
      )}
      {...props}
    >
      {iconElement}
      <h5 className={cn("text-h5", titleClass)}>{children}</h5>
    </div>
  );
};

export default TabTitle;
