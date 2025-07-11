"use client";

import { paths } from "@/config/paths";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const ModalRedirect = () => {
  const firstRenderRef = useRef<boolean>(true);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const modalParam = searchParams.get("modal");
    const key = searchParams.get("key");
    const login = searchParams.get("login");

    if (modalParam && modalParam === "reset-password" && firstRenderRef.current)
      router.push(paths.resetPassword.getHref({ key, login }));

    if (
      modalParam &&
      modalParam === paths.payDialog.getHref() &&
      firstRenderRef.current
    )
      router.push(paths.payDialog.getHref());

    // if (modalParam && !firstRenderRef.current)
    //   router.push(paths.home.getHref());

    if (firstRenderRef.current) firstRenderRef.current = false;
  }, [pathname]);
  return null;
};

export default ModalRedirect;
