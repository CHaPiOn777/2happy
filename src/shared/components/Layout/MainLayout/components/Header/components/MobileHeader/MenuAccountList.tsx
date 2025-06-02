import { paths } from "@/config/paths";
import AuthModal from "@/features/Auth/components/AuthModal";
import { useLogout } from "@/features/Auth/hooks/useLogout";
import { ACCOUNT_TABS } from "@/features/User/utils/isValidTab";
import { useUser } from "@/shared/api/authApi";
import ChevronDownIcon from "@/shared/components/icons/Chevron/ChevronDownIcon";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

const MenuAccountList = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { data: user } = useUser();

  const { handleLogout } = useLogout();

  if (user)
    return (
      <ul className="space-y-2">
        <li>
          <Link
            className="flex items-center justify-between py-3"
            href={paths.account.getHref()}
            onClick={() => setOpen(false)}
          >
            <span className="text-body2 text-gray-dark">Профиль</span>
            <ChevronDownIcon className="-rotate-90 fill-gray-dark" />
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center justify-between py-3"
            href={paths.account.getHref({ tab: ACCOUNT_TABS.ADDRESSES })}
            onClick={() => setOpen(false)}
          >
            <span className="text-body2 text-gray-dark">Адресная книга</span>
            <ChevronDownIcon className="-rotate-90 fill-gray-dark" />
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center justify-between py-3"
            href={paths.account.getHref({ tab: ACCOUNT_TABS.ORDERS })}
            onClick={() => setOpen(false)}
          >
            <span className="text-body2 text-gray-dark">Мои заказы</span>
            <ChevronDownIcon className="-rotate-90 fill-gray-dark" />
          </Link>
        </li>
        <li
          className="flex items-center justify-between py-3"
          onClick={handleLogout}
        >
          <span className="text-body2 text-gray-dark">Выйти</span>
          <ChevronDownIcon className="-rotate-90 fill-gray-dark" />
        </li>
      </ul>
    );
  return (
    <ul className="flex flex-col gap-2">
      <AuthModal defaultTab="login">
        <li className="flex items-center justify-between py-3">
          <span className="text-body2 text-gray-dark">Войти</span>
          <ChevronDownIcon className="-rotate-90 fill-gray-dark" />
        </li>
      </AuthModal>
      <AuthModal defaultTab="register">
        <li className="flex items-center justify-between py-3">
          <span className="text-body2 text-gray-dark">Создать аккаунт</span>
          <ChevronDownIcon className="-rotate-90 fill-gray-dark" />
        </li>
      </AuthModal>
    </ul>
  );
};

export default MenuAccountList;
