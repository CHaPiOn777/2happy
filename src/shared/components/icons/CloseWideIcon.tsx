import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const CloseWideIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={cn("fill-main transition-[fill,stroke,transform]", className)}
      {...props}
    >
      <path d="M2.852 22 2 21.148l4.333-4.333-3.962-1.204h6.018v6.018l-1.204-3.962L2.852 22Zm18.296 0-4.333-4.333-1.204 3.962v-6.018h6.018l-3.962 1.204L22 21.148l-.852.852ZM2.37 8.389l3.962-1.204L2 2.852 2.852 2l4.333 4.333L8.39 2.371v6.018H2.371Zm13.24 0V2.371l1.204 3.962L21.148 2l.852.852-4.333 4.333 3.962 1.204h-6.018ZM12 13.597c-.439 0-.815-.156-1.128-.47a1.538 1.538 0 0 1-.47-1.127c0-.439.157-.815.47-1.128.313-.313.69-.47 1.128-.47.439 0 .815.157 1.128.47.313.313.47.69.47 1.128 0 .439-.157.815-.47 1.128-.313.313-.69.47-1.128.47Z" />
    </svg>
  );
};

export default CloseWideIcon;
