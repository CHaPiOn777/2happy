import { ReactNode, Suspense } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback="">{children}</Suspense>;
};

export default Layout;
