import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const MapIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="40"
      viewBox="0 0 41 40"
      className={cn(
        " fill-main transition-[fill,stroke,transform] shrink-0",
        className
      )}
      {...props}
    >
      <path
        fill="#111112"
        d="M33.779 10H7.112V6.665h26.667v3.333Zm-9.5 10c-1.334 1.6-2.167 3.633-2.167 5.833 0 1.9.717 3.933 1.667 5.833v1.667H7.112v-10H5.445v-3.334l1.667-8.333h26.667l1.166 5.833a8.129 8.129 0 0 0-3.566-.833l-.334-1.667h-21.2l-1 5H24.28Zm-3.834 3.333h-10v6.666h10v-6.666Zm16.667 2.5c0 4.333-5.833 10.833-5.833 10.833s-5.834-6.5-5.834-10.833c0-3.167 2.667-5.834 5.834-5.834 3.166 0 5.833 2.667 5.833 5.834Zm-3.833.166c0-1-1-2-2-2s-2 .834-2 2c0 1 .833 2 2 2 1.166 0 2.166-1 2-2Z"
      />
    </svg>
  );
};

export default MapIcon;
