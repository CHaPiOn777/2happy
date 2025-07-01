import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const QuoteIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className={cn("fill-main transition-[fill,stroke,transform]", className)}
      {...props}
    >
      <path d="M18 5C9.75 5 3 11.75 3 20v15h15V20H8c0-5.55 4.45-10 10-10V5Zm19 0c-8.25 0-15 6.75-15 15v15h15V20H27c0-5.55 4.45-10 10-10V5Z" />
    </svg>
  );
};

export default QuoteIcon;
