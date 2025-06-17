"use client";

import { paths } from "@/config/paths";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import { useHasMounted } from "@/shared/hooks/useHasMounted";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";
import { cn } from "@/shared/utils";
import Link from "next/link";

const CollectionButton = () => {
  const isMobile = useMediaCustom("small");
  const hasMounted = useHasMounted();

  if (!hasMounted)
    return (
      <Button
        className="w-full text-white opacity-0 [&_svg]:fill-white [&_svg]:stroke-white"
        variant="tertiary"
        size="medium"
        asChild
      >
        <Link href={paths.catalog.collections.getHref("Готовые образы")}>
          Все образы <ArrowUpRightIcon />
        </Link>
      </Button>
    );
  return (
    <Button
      className={cn(
        "w-full text-white [&_svg]:fill-white [&_svg]:stroke-white"
      )}
      variant="tertiary"
      size={isMobile ? "small" : "medium"}
      asChild
    >
      <Link href={paths.catalog.collections.getHref("Готовые образы")}>
        Все образы <ArrowUpRightIcon />
      </Link>
    </Button>
  );
};

export default CollectionButton;
