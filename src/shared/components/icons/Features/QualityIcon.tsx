import { cn } from "@/shared/lib/utils";
import { SVGProps } from "react";

const QualityIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="49"
      height="48"
      viewBox="0 0 49 48"
      className={cn("fill-white transition-[fill,stroke,transform]", className)}
      {...props}
    >
      <path d="m19.24 31.176 5.009-3.038 5.008 3.038-1.33-5.698 4.428-3.803-5.82-.516-2.286-5.345-2.285 5.345-5.822.516 4.43 3.802-1.331 5.699ZM24.25 44l-5.904-5.882H10.13v-8.215l-5.88-5.904 5.88-5.904V9.88h8.215L24.25 4l5.904 5.88h8.215v8.215L44.25 24l-5.882 5.904v8.215h-8.215L24.249 44Zm0-2.856 5.043-5.043h7.06v-7.06L41.393 24l-5.043-5.043v-7.06h-7.06L24.25 6.855l-5.043 5.043h-7.06v7.06l-5.042 5.042 5.043 5.043v7.06h7.06l5.042 5.042Z" />
    </svg>
  );
};

export default QualityIcon;
