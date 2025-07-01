"use client";

import { useGoogleLogin } from "@/shared/api/authApi";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import Cookies from "js-cookie";
import GoogleColoredIcon from "@/shared/components/icons/Social/GoogleColoredIcon";
import { paths } from "@/config/paths";
import { notify } from "@/shared/lib/notify";
import Container from "@/shared/components/UI/Container";

const CompleteAuth = () => {
  const session = useSession();

  const router = useRouter();

  const searchParams = useSearchParams();

  const { mutate: googleLogin } = useGoogleLogin({
    onSuccess: () => {},
    onError: (err) => {
      notify({ message: err.response?.data.message || "", variant: "error" });
      Cookies.remove("access_token");
    },
    onSettled: () => {
      const href = searchParams.get("callback") ?? paths.home.getHref();
      router.replace(href);
    },
  });

  useEffect(() => {
    if (session.data?.accessToken && !Cookies.get("access_token"))
      googleLogin(session?.data?.accessToken);
  }, [session]);

  return (
    <Container className="flex-col items-center gap-6 my-20 sm:my-section">
      <GoogleColoredIcon className="animate-pulse size-24 sm:size-36" />
      <h3 className="text-h3 text-center">Происходит авторизация в Google</h3>
    </Container>
  );
};

export default CompleteAuth;
