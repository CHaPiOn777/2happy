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
      asChild
    >
      <a target="_blank" href="https://wa.me/77021657378">
        Стать партнером <ArrowUpRightIcon />
      </a>
    </Button>
  );
};

export default BecomePartnerButton;
