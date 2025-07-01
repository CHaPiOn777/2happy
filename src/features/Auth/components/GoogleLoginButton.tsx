"use client";

import LoaderIcon from "@/shared/components/icons/LoaderIcon";
import GoogleIcon from "@/shared/components/icons/Social/GoogleIcon";
import { Button } from "@/shared/components/UI/Button";
import { signIn } from "next-auth/react";
import { useState } from "react";

const GoogleLoginButton = ({ callbackUrl }: { callbackUrl?: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    await signIn("google", {
      callbackUrl: callbackUrl,
      redirect: true,
    });
  };

  return (
    <Button
      variant="secondary"
      size="normal"
      className="w-full"
      disabled={isLoading}
      onClick={handleGoogleLogin}
    >
      {isLoading ? <LoaderIcon className="animate-spin" /> : <GoogleIcon />}
      Войти через Google
    </Button>
  );
};

export default GoogleLoginButton;
