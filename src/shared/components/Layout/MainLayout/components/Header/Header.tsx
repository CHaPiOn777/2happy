import { ReactNode } from "react";

import DesktopHeader from "./components/DesktopHeader/DesktopHeader";

import "./style.css";
import MobileHeader from "./components/MobileHeader/MobileHeader";
import CartSheet from "@/features/Cart/components/Sheets/CartSheet/CartSheet";
import CartIcon from "@/shared/components/icons/CartIcon";
import StyledTooltip from "@/shared/components/UI/StyledTooltip";
import UserAccount from "@/features/User/components/UserAccount";
import UserIcon from "@/shared/components/icons/UserIcon";
import Link from "next/link";
import { paths } from "@/config/paths";
import { IconButton } from "@/shared/components/UI/IconButton";
import CartItemsCount from "@/features/Cart/components/CartItemsCount";

const Header = () => {
  return (
    <>
      <MobileHeader
        rightSlot={
          <div className="flex gap-4">
            <CartSheet triggerProps={{ asChild: true }}>
              <IconButton variant="secondary" size="medium">
                <CartIcon className="hover:fill-main" />
                <CartItemsCount />
              </IconButton>
            </CartSheet>
            <UserAccount
              authTrigger={
                <IconButton className="w-12" variant="secondary" size="medium">
                  <Link className="relative" href={paths.account.getHref()}>
                    <UserIcon className="hover:fill-main transition-colors" />
                    <span className="absolute top-0 right-0 w-1 h-1 rounded-full bg-red" />
                  </Link>
                </IconButton>
              }
              defaultTrigger={
                <IconButton className="w-12" variant="secondary" size="medium">
                  <UserIcon className="hover:fill-main transition-colors" />
                </IconButton>
              }
            />
          </div>
        }
      />
      <DesktopHeader
        rightSlot={
          <div className="flex gap-6">
            <CartSheet>
              <div data-tooltip-id="cart" data-tooltip-content="Корзина">
                <CartIcon className="hover:fill-main" />
                <StyledTooltip id="cart" />
              </div>
            </CartSheet>
            <UserAccount
              authTrigger={
                <Link className="relative" href={paths.account.getHref()}>
                  <UserIcon className="hover:fill-main transition-colors" />
                  <span className="absolute top-0 right-0 w-1 h-1 rounded-full bg-red" />
                </Link>
              }
              defaultTrigger={
                <button>
                  <UserIcon
                    data-tooltip-id="auth"
                    data-tooltip-content="Войти"
                    className="hover:fill-main transition-colors"
                  />

                  <StyledTooltip id="auth" />
                </button>
              }
            />
          </div>
        }
      />
    </>
  );
};

export default Header;
