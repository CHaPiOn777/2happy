import { ReactNode } from "react";

import DesktopHeader from "./components/DesktopHeader";

import "./style.css";

const Header = async ({ buttonsSlot }: { buttonsSlot: ReactNode }) => {
  return <DesktopHeader buttonsSlot={buttonsSlot} />;
};

export default Header;
