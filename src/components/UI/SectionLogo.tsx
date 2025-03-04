import { cn } from "@/lib/utils";
import Image from "next/image";

const SectionLogo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute w-full max-w-[992px] h-[112px]", className)}>
      <Image fill src="/images/section-logo.png" alt="section-logo" />
    </div>
  );
};

export default SectionLogo;
