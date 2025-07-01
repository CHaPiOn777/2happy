import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const HomeIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={cn("fill-white transition-all", className)}
    {...props}
  >
    <path d="M4.286 20.733h4.747V13.28h5.934v7.454h4.747v-11.4L12 3.582l-7.714 5.75v11.4ZM3 22V8.699L12 2l9 6.699V22h-7.318v-7.454h-3.364V22H3Z" />
  </svg>
);

export default HomeIcon;
