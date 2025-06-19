import { cn } from "@/shared/utils/cn";
import InstagramRoundedIcon from "@/shared/components/icons/Social/InstagramRoundedIcon";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";

const InstagramCard = ({
  src,
  href,
  className,
}: {
  src: string;
  href: string;
  className?: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className={cn("group relative w-full h-full", className)}
    >
      <InstagramRoundedIcon className="absolute w-[10%] h-[10%] min-w-12 min-h-12 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] opacity-0 group-hover:opacity-100 transition-opacity" />
      <ImageWithLoader
        src={src}
        className="group-hover:opacity-60 transition-opacity"
        alt="instagram-image"
      />
    </a>
  );
};

export default InstagramCard;
