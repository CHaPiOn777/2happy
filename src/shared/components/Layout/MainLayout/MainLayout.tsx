import { ReactNode, Suspense } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainLoader from "./components/MainLoader";
import CookieDialog from "./components/CookieDialog/CookieDialog";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<MainLoader />}>
      <Header />
      <main className="flex-1 mt-[80px] lg:mt-[var(--header-height)]">
        {children}
      </main>
      <Footer />
      <CookieDialog />
    </Suspense>
  );
};
