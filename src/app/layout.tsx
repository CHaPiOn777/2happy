import "../shared/styles/components.css";
import "../shared/styles/globals.css";
import "../shared/lib/fonts";

import { akira, lato } from "../shared/lib/fonts";

import Providers from "../providers/providers";
import { MainLayout } from "@/shared/components/Layout/MainLayout/MainLayout";
import { Suspense } from "react";

export const metadata = {
  title: "2HAPPY",
  description: "2HAPPY",
  keywords: "2happy, 2хэппи, магазин одежды алматы, магазин одежды",
  icons: {
    icon: "/logo_black.svg",
  },
};

const RootLayout = async ({
  auth,
  payment,
  children,
  breadcrumbs,
}: Readonly<{
  auth: React.ReactNode;
  payment: React.ReactNode;
  children: React.ReactNode;
  breadcrumbs: React.ReactNode;
}>) => {
  return (
    <html className="h-full" lang="ru">
      <body
        className={`${lato.variable} ${akira.variable} font-sans flex flex-col h-full bg-white`}
      >
        <Suspense fallback="">
          <Providers>
            <MainLayout>
              {auth}
              {payment}
              {children}
              {breadcrumbs}
            </MainLayout>
          </Providers>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
