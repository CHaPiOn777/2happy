"use client";

import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";
import { cn } from "@/shared/utils";

const BecomePartnerButton = ({ className }: { className?: string }) => {
  const isTablet = useMediaCustom("lg");
  return (
    <Button
      className={cn("w-full self-end", className)}
      size={isTablet ? "medium" : "large"}
    >
      Стать партнёром <ArrowUpRightIcon />
    </Button>
  );
};

export default BecomePartnerButton;
