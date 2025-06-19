import { ReactNode } from "react";
import Features from "./components/Features/Features";
import Instagram from "../Instagram/Instagram";

const StoreLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <Features />
      <Instagram variant="white" />
    </>
  );
};

export default StoreLayout;
