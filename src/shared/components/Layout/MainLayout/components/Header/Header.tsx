import DesktopHeader from "./components/DesktopHeader/DesktopHeader";

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
import SearchSheet from "./components/SearchSheet/SearchSheet";
import SearchIcon from "@/shared/components/icons/SearchIcon";

import "./style.css";
import NewCartIcon from "@/shared/components/icons/NewCartIcon";
import UserMobileButton from "@/features/User/components/UserMobileButton";
import FavoriteSheet from "@/features/Favorite/components/FavoriteSheet";
import HeartIcon from "@/shared/components/icons/HeartIcon";
import FavoriteItemsCount from "@/features/Favorite/components/FavoriteItemsCount";

const Header = () => {
  return (
    <>
      <MobileHeader
        leftSlot={
          <SearchSheet
            triggerProps={{
              className:
                "w-10 h-10 sm:w-auto sm:h-auto flex items-center justify-center",
              asChild: false,
            }}
          >
            <SearchIcon className="group-hover:fill-gray-middle cursor-pointer !size-6" />
          </SearchSheet>
        }
        rightSlot={
          <div className="flex gap-2 md:gap-4 justify-end">
            <FavoriteSheet triggerProps={{ asChild: true }}>
              <IconButton variant="secondary" size="medium">
                <HeartIcon />
                <FavoriteItemsCount className="top-2 right-1" />
              </IconButton>
            </FavoriteSheet>
            <CartSheet triggerProps={{ asChild: true }}>
              <IconButton variant="secondary" size="medium">
                <NewCartIcon className="fill-main" />
                <CartItemsCount className="top-2 right-1" />
              </IconButton>
            </CartSheet>
            <UserMobileButton />
          </div>
        }
      />
      <DesktopHeader
        rightSlot={
          <div className="flex gap-6">
            <SearchSheet>
              <div className="mr-4 cursor-pointer">
                <SearchIcon className="group-hover:fill-gray-middle cursor-pointer" />
                Поиск
              </div>
            </SearchSheet>
            <FavoriteSheet>
              <div
                className="group"
                data-tooltip-id="favorite"
                data-tooltip-content="Избранное"
              >
                <HeartIcon className="group-hover:fill-main" />
                <FavoriteItemsCount />
                <StyledTooltip id="favorite" />
              </div>
            </FavoriteSheet>
            <CartSheet>
              <div
                className="group"
                data-tooltip-id="cart"
                data-tooltip-content="Корзина"
              >
                <CartIcon className="group-hover:fill-main" />
                <CartItemsCount />
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
