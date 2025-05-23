import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const EditIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      viewBox="0 0 17 16"
      className={cn("fill-main transition-all", className)}
      {...props}
    >
      <path d="M2.78 14h11.33a.334.334 0 0 0 .335-.336.337.337 0 0 0-.335-.337H2.78a.335.335 0 0 0-.335.337.337.337 0 0 0 .336.336Zm4.131-2.527c.283-.08.542-.23.751-.438l6.396-6.416a1.179 1.179 0 0 0 0-1.661l-.63-.626a1.198 1.198 0 0 0-1.656 0l-6.396 6.41c-.206.209-.354.469-.429.753l-.496 1.857a.5.5 0 0 0 .483.632l1.977-.511Zm.275-.915a.984.984 0 0 1-.449.262l-.65.175-.67-.673.174-.652a1.01 1.01 0 0 1 .261-.45l.255-.25 1.334 1.339-.255.249Zm.731-.727L6.583 8.493l4.512-4.526 1.334 1.338-4.512 4.526Zm5.665-5.683-.677.68-1.334-1.339.677-.686a.502.502 0 0 1 .71 0l.624.632a.508.508 0 0 1 0 .713Z" />
    </svg>
  );
};

export default EditIcon;
