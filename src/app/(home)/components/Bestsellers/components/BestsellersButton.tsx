"use client";

import { paths } from "@/config/paths";
import ArrowRightIcon from "@/shared/components/icons/Arrows/ArrowRightIcon";
import { Button } from "@/shared/components/UI/Button";
import { useHasMounted } from "@/shared/hooks/useHasMounted";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";
import Link from "next/link";

const BestsellersButton = () => {
  const isMobile = useMediaCustom("small");
  const isMedium = useMediaCustom("md");
  const hasMounted = useHasMounted();

  if (!hasMounted)
    return (
      <Button
        className="absolute md:relative top-0 z-10 text-white [&_svg]:fill-white opacity-0"
        variant={"primary"}
        size="medium"
        asChild
      >
        <Link href={paths.catalog.bestsellers.getHref()}>
          Смотреть все <ArrowRightIcon />
        </Link>
      </Button>
    );

  if (isMobile) return null;

  return (
    <Button
      className="absolute md:relative top-0 z-10 text-white [&_svg]:fill-white"
      variant={isMedium ? "primary" : "tertiary"}
      size={isMedium ? "small" : "medium"}
      asChild
    >
      <Link href={paths.catalog.bestsellers.getHref()}>
        Смотреть все <ArrowRightIcon />
      </Link>
    </Button>
  );
};

export default BestsellersButton;
