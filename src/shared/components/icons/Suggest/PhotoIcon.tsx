import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const PhotoIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="49"
      height="49"
      viewBox="0 0 49 49"
      className={cn(
        "stroke-main fill-transparent transition-[fill,stroke,transform]",
        className
      )}
      {...props}
    >
      <g
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
        opacity=".8"
      >
        <path d="M32.17 7.38h5.715m2.895 33.163c.587-.714.914-1.684.914-2.693V14.997c0-1.01-.328-1.98-.914-2.693-.581-.716-1.373-1.116-2.2-1.116H21.473c-3.285 0-3.922-3.296-6.775-3.76-.503-.081-1.025-.049-1.533-.049-1.816 0-2.722 0-3.437.303a3.81 3.81 0 0 0-2.017 2.019c-.303.71-.303 1.617-.303 3.432V37.85c0 1.01.328 1.98.915 2.693.583.714 1.375 1.116 2.202 1.116h28.053c.827 0 1.617-.4 2.202-1.116Z" />
        <path d="M27.409 34.04a7.62 7.62 0 0 0 7.619-7.618 7.617 7.617 0 0 0-7.62-7.617 7.62 7.62 0 0 0-7.618 7.617 7.617 7.617 0 0 0 7.619 7.618Z" />
      </g>
    </svg>
  );
};

export default PhotoIcon;
