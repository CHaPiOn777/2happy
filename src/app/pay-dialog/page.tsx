"use client";

import { paths } from "@/config/paths";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PayDialogPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace(paths.home.getHref());
  }, []);
  return null;
};

export default PayDialogPage;
