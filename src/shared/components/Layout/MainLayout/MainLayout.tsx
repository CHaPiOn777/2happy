import { ReactNode, Suspense } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { getCategoriesQueryOptions } from "@/features/Categories/api/categoriesApi";
import { categoryIds } from "@/features/Categories/consts/consts";
import { getQueryClient } from "@/shared/api/queryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Link from "next/link";
import HeartIcon from "../../icons/HeartIcon";
import StyledTooltip from "../../UI/StyledTooltip";
import CartSheet from "@/features/Cart/components/Sheets/CartSheet/CartSheet";
import CartIcon from "../../icons/CartIcon";
import UserAccount from "@/features/User/components/UserAccount";
import MainLoader from "./components/MainLoader";
import CookieDialog from "./components/CookieDialog/CookieDialog";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery(
    getCategoriesQueryOptions({
      parent: categoryIds["clothes"],
    })
  );

  queryClient.prefetchQuery(
    getCategoriesQueryOptions({
      parent: categoryIds["accessories"],
    })
  );

  queryClient.prefetchQuery(
    getCategoriesQueryOptions({
      parent: categoryIds["outerwear"],
    })
  );
  return (
    <Suspense fallback={<MainLoader />}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Header
          buttonsSlot={
            <div className="flex gap-6">
              {/* <Link
                href="/"
                data-tooltip-id="favorite"
                data-tooltip-content="Избранное"
              >
                <HeartIcon className="hover:fill-black" />
                <StyledTooltip id="favorite" />
              </Link> */}
              <CartSheet>
                <div data-tooltip-id="cart" data-tooltip-content="Корзина">
                  <CartIcon className="hover:fill-black" />
                  <StyledTooltip id="cart" />
                </div>
              </CartSheet>
              <UserAccount />
            </div>
          }
        />
        <main className="flex-1 mt-[var(--header-height)]">{children}</main>
        <Footer />
        <CookieDialog />
      </HydrationBoundary>
    </Suspense>
  );
};
