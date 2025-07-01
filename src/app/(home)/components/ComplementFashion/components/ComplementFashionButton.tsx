"use client";

import { paths } from "@/config/paths";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import { useHasMounted } from "@/shared/hooks/useHasMounted";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";
import Link from "next/link";

const ComplementFashionButton = () => {
  const isMobile = useMediaCustom("small");
  const hasMounted = useHasMounted();

  if (!hasMounted)
    return (
      <Button
        variant="tertiary"
        className="lg:w-full text-white [&_svg]:fill-white opacity-0"
        asChild
      >
        <Link href={paths.catalog.getHref()}>
          Перейти в каталог
          <ArrowUpRightIcon />
        </Link>
      </Button>
    );

  if (isMobile) return null;

  return (
    <Button
      variant="tertiary"
      className="lg:w-full text-white [&_svg]:fill-white"
      size={isMobile ? "medium" : "normal"}
      asChild
    >
      <Link href={paths.catalog.getHref()}>
        Перейти в каталог
        <ArrowUpRightIcon />
      </Link>
    </Button>
  );
};

export default ComplementFashionButton;
