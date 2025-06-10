"use client";

import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import { useHasMounted } from "@/shared/hooks/useHasMounted";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";

const LoyalButton = () => {
  const hasMounted = useHasMounted();

  const isTablet = useMediaCustom("lg");

  if (!hasMounted) return null;
  return (
    <Button className="w-full" size={isTablet ? "medium" : "large"} asChild>
      <a target="_blank" href="https://wa.me/77021657378">
        Стать стилистом <ArrowUpRightIcon />
      </a>
    </Button>
  );
};

export default LoyalButton;
