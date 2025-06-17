"use client";

import { paths } from "@/config/paths";
import AuthModal from "@/features/Auth/components/AuthModal";
import { useUser } from "@/shared/api/authApi";
import UserIcon from "@/shared/components/icons/UserIcon";
import { IconButton } from "@/shared/components/UI/IconButton";
import { useHasMounted } from "@/shared/hooks/useHasMounted";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";
import Link from "next/link";

const UserMobileButton = () => {
  const isMobile = useMediaCustom("small");
  const { data: user, isFetching } = useUser();

  const hasMounted = useHasMounted();

  if (!hasMounted)
    return (
      <IconButton
        className="w-12 opacity-0"
        variant="secondary"
        size="medium"
        asChild
      >
        <Link className="relative" href={paths.account.getHref()}>
          <UserIcon className="hover:fill-main transition-colors" />
          <span className="absolute top-3 right-3 w-1 h-1 rounded-full bg-red" />
        </Link>
      </IconButton>
    );

  if (isMobile) {
    return null;
  }

  if (user)
    return (
      <IconButton className="w-12" variant="secondary" size="medium" asChild>
        <Link className="relative" href={paths.account.getHref()}>
          <UserIcon className="hover:fill-main transition-colors" />
          <span className="absolute top-3 right-3 w-1 h-1 rounded-full bg-red" />
        </Link>
      </IconButton>
    );

  return (
    <AuthModal triggerProps={{ disabled: isFetching, asChild: true }}>
      <IconButton className="w-12" variant="secondary" size="medium">
        <Link className="relative" href={paths.account.getHref()}>
          <UserIcon className="hover:fill-main transition-colors" />
        </Link>
      </IconButton>
    </AuthModal>
  );
};

export default UserMobileButton;
