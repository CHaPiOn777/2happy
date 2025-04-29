import { ReactNode } from "react";
import Features from "./components/Features/Features";
import Instagram from "./components/Instagram/Instagram";

const CatalogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <Features />
      <Instagram />
    </>
  );
};

export default CatalogLayout;
