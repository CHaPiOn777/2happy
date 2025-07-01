import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const BookIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="49"
      height="49"
      viewBox="0 0 49 49"
      className={cn(
        "stroke-white fill-transparent transition-[fill,stroke,transform]",
        className
      )}
      {...props}
    >
      <path
        stroke="#FCFCFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M24.552 43.008c1.001-1.76 4.157-8.042 9.687-11.075 1.558-.857 2.34-1.285 2.625-1.763.288-.477.288-1.158.288-2.52V9.57c0-2.518 0-3.778-1.14-4.35-1.141-.57-2.038.056-3.833 1.308-4.263 2.97-6.756 7.343-7.628 8.869v27.61Zm0 0c-.52 0-1.578-.526-3.699-1.577-2.154-1.07-5.13-2.135-8.941-2.802-4.28-.749-6.418-1.125-7.388-2.23-.972-1.106-.972-2.877-.972-6.42V16.053c0-3.876 0-5.81 1.512-7.005 1.516-1.192 3.292-.882 6.845-.258 7.019 1.227 11.2 4.733 12.643 6.21m0 28.008c.518 0 1.579-.526 3.695-1.577 2.157-1.07 5.133-2.135 8.947-2.802 4.275-.749 6.415-1.125 7.385-2.23.972-1.106.972-2.877.972-6.422V16.055c0-3.874 0-5.81-1.512-7.005-1.518-1.194-4.788-.26-6.888 1.233"
      />
    </svg>
  );
};

export default BookIcon;
