import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const FileIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    className={cn("stroke-main fill-transparent transition-all", className)}
    {...props}
  >
    <path
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 15.5v6H3v-6M17 8.5l-5-5-5 5M12 4.5v12"
    />
  </svg>
);

export default FileIcon;
