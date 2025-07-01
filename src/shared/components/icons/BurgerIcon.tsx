import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const BurgerIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      className={cn("fill-main transition-[fill,stroke,transform]", className)}
      {...props}
    >
      <path d="M8 35v-2.087h32V35H8Zm0-9.956v-2.088h32v2.088H8Zm0-9.957V13h32v2.087H8Z" />
    </svg>
  );
};

export default BurgerIcon;
