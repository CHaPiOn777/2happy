import { Breadcrumb } from "@/shared/components/UI/Breadcrumb";
import Container from "@/shared/components/UI/Container";
import { cn } from "@/shared/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";

const Breadcrumbs = ({
  children,
  rightSlot,
  className,
  ...props
}: {
  children: ReactNode;
  rightSlot?: ReactNode;
} & ComponentPropsWithoutRef<"div">) => {
  return (
    <>
      <div className={cn("border-b border-main", className)} {...props}>
        <Container className="flex justify-between h-full">
          <Breadcrumb className="flex my-4 lg:my-6 items-center">
            {children}
          </Breadcrumb>
          {rightSlot}
        </Container>
      </div>
    </>
  );
};

export default Breadcrumbs;
