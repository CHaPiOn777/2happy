"use client";

import { paths } from "@/config/paths";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";
import Link from "next/link";

const MainButton = () => {
  const isTablet = useMediaCustom("lg");

  return (
    <Button className="w-full" size={isTablet ? "normal" : "large"} asChild>
      <Link href={paths.catalog.getHref()}>
        Перейти в каталог <ArrowUpRightIcon />
      </Link>
    </Button>
  );
};

export default MainButton;
