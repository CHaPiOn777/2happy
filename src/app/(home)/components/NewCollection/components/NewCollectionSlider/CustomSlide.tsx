import { paths } from "@/config/paths";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import Link from "next/link";

const CustomSlide = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full px-4 pt-10 pb-6 bg-main">
      <span className="text-h4 text-white text-center">
        Погрузитесь в мир стильных новинок!
      </span>
      <Button
        className="w-full text-white"
        variant="tertiary"
        size="medium"
        asChild
      >
        <Link href={paths.catalog.new_collection.getHref("Новая коллекция")}>
          Все новинки <ArrowUpRightIcon className="fill-white stroke-white" />
        </Link>
      </Button>
    </div>
  );
};

export default CustomSlide;
