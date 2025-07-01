import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const FlowerIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="49"
      height="49"
      viewBox="0 0 49 49"
      className={cn(
        "stroke-white transition-[fill,stroke,transform]",
        className
      )}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
        d="M24.551 35.071s-6.3-6.616-6.3-14.778c0-8.161 6.3-14.777 6.3-14.777s6.3 6.616 6.3 14.777c0 8.162-6.3 14.778-6.3 14.778Zm0 0s-9.202-.2-15-6.031c-5.798-5.831-6-15.08-6-15.08s4.442.097 9.093 2.111m11.907 19s9.2-.203 15-6.031c5.8-5.829 6-15.08 6-15.08s-4.44.097-9.093 2.111m-11.865 19c-.349 2.814 1.344 8.445 7.337 8.445 4.19 0 6.286-4.223 13.621 0-.84-4.223-2.52-6.925-4.97-8.445m-16.074 0c.35 2.814-1.344 8.445-7.333 8.445-4.194 0-6.288-4.223-13.623 0 .84-4.223 2.52-6.925 4.97-8.445"
      />
    </svg>
  );
};

export default FlowerIcon;
