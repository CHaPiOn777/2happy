"use client";

import { paths } from "@/config/paths";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import { useHasMounted } from "@/shared/hooks/useHasMounted";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";
import { cn } from "@/shared/utils";
import Link from "next/link";

const MainButton = ({ className }: { className?: string }) => {
  const isTablet = useMediaCustom("lg");

  const hasMounted = useHasMounted();

  if (!hasMounted)
    return (
      <Button
        className={cn("w-full opacity-0", className)}
        size="large"
        asChild
      >
        <Link href={paths.catalog.getHref()}>
          Перейти в каталог <ArrowUpRightIcon />
        </Link>
      </Button>
    );

  return (
    <Button
      className={cn("w-full", className)}
      size={isTablet ? "normal" : "large"}
      asChild
    >
      <Link href={paths.catalog.getHref()}>
        Перейти в каталог <ArrowUpRightIcon />
      </Link>
    </Button>
  );
};

export default MainButton;
