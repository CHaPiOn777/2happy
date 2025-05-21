"use client";

import { getQueryClient } from "@/shared/api/queryClient";
import ToastProvider from "@/providers/ToastProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import ErrorsNotify from "./ErrorsCatch";

const Providers = ({ children }: { children: ReactNode }) => {
  const queryClient = getQueryClient();
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>{children}</ToastProvider>
        <ReactQueryDevtools initialIsOpen={true} />
        <ErrorsNotify />
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;
