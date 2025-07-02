"use client";

import { paths } from "@/config/paths";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const ResetPasswordPage = () => {
  const router = useRouter();

  const searchParams = useSearchParams();

  useEffect(() => {
    const key = searchParams.get("key");
    const login = searchParams.get("login");

    if (key && login)
      router.push(paths.home.getHref({ modal: "reset-password", key, login }));
    else router.push(paths.home.getHref());
  }, []);
  return (
    <div className="flex justify-center items-center absolute top-0 left-0 bg-white w-screen h-screen z-over-header">
      <h2 className="text-h3Akira animate-pulse">2happy</h2>
    </div>
  );
};

export default ResetPasswordPage;
