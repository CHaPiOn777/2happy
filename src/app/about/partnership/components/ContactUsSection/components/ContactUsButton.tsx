"use client";

import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";
import { cn } from "@/shared/utils";

const ContactUsButton = ({ className }: { className?: string }) => {
  const isMobile = useMediaCustom("small");

  return (
    <Button
      className={cn("w-full mt-8 sm:mt-14", className)}
      size={isMobile ? "small" : "medium"}
      asChild
    >
      <a
        href="https://wa.me/77021657378"
        target="_blank"
        rel="noopener noreferrer"
      >
        Связаться с нами
        <ArrowUpRightIcon />
      </a>
    </Button>
  );
};

export default ContactUsButton;
