"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { notify } from "@/shared/lib/notify";
import { useRouter, useSearchParams } from "next/navigation";

const ErrorsNotify = () => {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const errorMessage = Cookies.get("auth_error");

    if (errorMessage) notify({ message: errorMessage, variant: "error" });

    const redirectUrl = params.get("callbackUrl");

    if (redirectUrl) router.push(redirectUrl);
  }, []);
  return null;
};

export default ErrorsNotify;
