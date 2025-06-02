"use client";

import { getQueryClient } from "@/shared/api/queryClient";
import { useAuthStore } from "@/shared/store/authStore";
import { useRouter } from "next/navigation";

import Cookies from "js-cookie";
import { getCartQueryOptions } from "@/features/Cart/api/cartQueries";
import { getUserQueryOptions } from "@/shared/api/authApi";
import { paths } from "@/config/paths";

export const useLogout = () => {
  const queryClient = getQueryClient();
  const { clearUserToken } = useAuthStore();

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("access_token");
    clearUserToken();
    queryClient.invalidateQueries(getCartQueryOptions());
    queryClient.removeQueries(getUserQueryOptions());

    router.push(paths.home.getHref());
  };

  return { handleLogout };
};
