"use client";

import { useGoogleLogin } from "@/shared/api/authApi";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Cookies from "js-cookie";
import GoogleColoredIcon from "@/shared/components/icons/Social/GoogleColoredIcon";
import { paths } from "@/config/paths";
import { notify } from "@/shared/lib/notify";

const CompleteAuth = () => {
  const session = useSession();

  const router = useRouter();

  const { mutate: googleLogin } = useGoogleLogin({
    onSuccess: () => {},
    onError: (err) => {
      notify({ message: err.response?.data.message || "", variant: "error" });
      Cookies.remove("access_token");
    },
    onSettled: () => {
      router.replace(paths.home.getHref());
    },
  });

  useEffect(() => {
    if (session.data?.accessToken && !Cookies.get("access_token"))
      googleLogin(session?.data?.accessToken);
  }, [session]);

  return (
    <div className="flex flex-col items-center gap-6 my-section">
      <GoogleColoredIcon className="animate-pulse" />
      <h3 className="text-h3">Происходит авторизация в Google</h3>
    </div>
  );
};

export default CompleteAuth;
