"use client";

import { useUser } from "@/shared/api/authApi";
import { paths } from "@/config/paths";
import AuthModal from "@/features/Auth/components/AuthModal";
import Link from "next/link";
import { ACCOUNT_TABS } from "@/features/User/utils/isValidTab";
import { useLogout } from "@/features/Auth/hooks/useLogout";

const AccountList = () => {
  const user = useUser();

  const { handleLogout } = useLogout();
  return (
    <li className="basis-full">
      <h4 className="text-h4 text-white pb-4">Аккаунт</h4>
      <ul className="space-y-2 text-white-secondary">
        {user.data ? (
          <>
            <li>
              <Link
                href={paths.account.getHref()}
                className="link-hover text-button-xs"
              >
                Личный кабинет
              </Link>
            </li>
            <li>
              <Link
                href={paths.account.getHref({ tab: ACCOUNT_TABS.ADDRESSES })}
                className="link-hover text-button-xs"
              >
                Адресная книга
              </Link>
            </li>
            <li>
              <Link
                href={paths.account.getHref({ tab: ACCOUNT_TABS.ORDERS })}
                className="link-hover text-button-xs"
              >
                Мои заказы
              </Link>
            </li>
            <li>
              <button
                className="link-hover text-button-xs"
                onClick={handleLogout}
              >
                Выйти
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="text-button-xs">
              <AuthModal>
                <span className="link-hover">Войти</span>
              </AuthModal>
            </li>
            <li className="text-button-xs">
              <AuthModal defaultTab="register">
                <span className="link-hover">Создать учетную запись</span>
              </AuthModal>
            </li>
          </>
        )}
      </ul>
    </li>
  );
};

export default AccountList;
