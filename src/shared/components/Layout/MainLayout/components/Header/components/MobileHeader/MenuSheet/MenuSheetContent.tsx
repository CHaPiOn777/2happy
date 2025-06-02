import { TCategories } from "@/features/Categories/consts/consts";
import ChevronDownIcon from "@/shared/components/icons/Chevron/ChevronDownIcon";
import { ScrollArea } from "@/shared/components/UI/ScrollArea";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/shared/components/UI/Sheet";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { mainLinks } from "../../../consts/consts";
import Link from "next/link";
import { Separator } from "@/shared/components/UI/Separator";
import MenuAccountList from "../MenuAccountList";
import { paths } from "@/config/paths";
import MobileCategories from "../MobileCategories";

export type MenuTabs = "all" | "catalog" | TCategories;

const MenuSheetContent = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [tab, setTab] = useState<MenuTabs>("all");

  const previousTabRef = useRef<MenuTabs[]>([]);

  const handleChangeTab = (newTab: MenuTabs) => {
    setTab(newTab);
    previousTabRef.current.push(tab);
  };

  const handleBack = () => {
    const previousTab = previousTabRef.current.pop();
    if (previousTab) setTab(previousTab);
  };

  useEffect(() => {
    if (!open) {
      previousTabRef.current = [];
      setTab("all");
    }
  }, [open]);

  return (
    <SheetContent
      className="flex flex-col gap-6 max-w-[800px] w-full z-over-header"
      overlayClassName="z-over-header"
      side="left"
    >
      <SheetHeader className="flex gap-8">
        <SheetTitle className="sr-only">Меню</SheetTitle>
        <SheetClose className="relative w-12 h-12 top-auto right-auto rounded-xs bg-main opacity-100 [&_svg]:fill-white" />
        <SheetDescription className="text-body2 text-gray-dark">
          {tab != "all" ? (
            <button className="flex items-center gap-2" onClick={handleBack}>
              <ChevronDownIcon className="size-4 rotate-90" />
              <span>Назад</span>
            </button>
          ) : (
            "Откройте для себя"
          )}
        </SheetDescription>
      </SheetHeader>
      <ScrollArea type="always">
        {tab === "all" && (
          <div className="space-y-6 mr-2">
            <ul className="space-y-4">
              <li>
                <button
                  className="flex items-center justify-between w-full py-2"
                  onClick={() => handleChangeTab("catalog")}
                >
                  <h3 className="text-h3">Каталог</h3>
                  <ChevronDownIcon className="-rotate-90" />
                </button>
              </li>
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    className="flex items-center justify-between py-2"
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    <h3 className="text-h3">{link.title}</h3>
                    <ChevronDownIcon className="-rotate-90" />
                  </Link>
                </li>
              ))}
            </ul>
            <Separator />
            <MenuAccountList setOpen={setOpen} />
            <Separator />
            <ul className="space-y-2">
              <li>
                <Link
                  className="flex items-center justify-between py-3"
                  href={paths.help.getHref()}
                  onClick={() => setOpen(false)}
                >
                  <span className="text-body2 text-gray-dark">Помощь</span>
                  <ChevronDownIcon className="-rotate-90 fill-gray-dark" />
                </Link>
              </li>

              <li>
                <Link
                  className="flex items-center justify-between py-3"
                  href={paths.contacts.getHref()}
                  onClick={() => setOpen(false)}
                >
                  <span className="text-body2 text-gray-dark">Контакты</span>
                  <ChevronDownIcon className="-rotate-90 fill-gray-dark" />
                </Link>
              </li>
            </ul>
          </div>
        )}
        {tab != "all" && (
          <MobileCategories
            tab={tab}
            handleChangeTab={handleChangeTab}
            handleCloseSheet={() => setOpen(false)}
          />
        )}
      </ScrollArea>
    </SheetContent>
  );
};

export default MenuSheetContent;
