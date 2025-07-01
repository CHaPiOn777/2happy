"use client";

import { paths } from "@/config/paths";
import { Button } from "@/shared/components/UI/Button";
import { useHasMounted } from "@/shared/hooks/useHasMounted";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";
import Link from "next/link";

const ContinueButton = () => {
  const hasMounted = useHasMounted();

  const isTablet = useMediaCustom("lg");

  if (!hasMounted) return null;

  return (
    <Button
      size={isTablet ? "medium" : "large"}
      variant="secondary"
      className="text-white border-white border-b-0 border-t-0 hidden md:inline-block"
      asChild
    >
      <Link href={paths.checkout.getHref()}>Продолжить покупки</Link>
    </Button>
  );
};

export default ContinueButton;
