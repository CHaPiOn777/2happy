"use client";

import { paths } from "@/config/paths";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import { useHasMounted } from "@/shared/hooks/useHasMounted";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";
import Link from "next/link";

const MainButton = () => {
  const isTablet = useMediaCustom("lg");

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <Button
      className="absolute -bottom-14 left-0 md:relative w-full"
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
