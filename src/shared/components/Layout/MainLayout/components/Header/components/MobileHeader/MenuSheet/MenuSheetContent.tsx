import { categoryIds, TCategories } from "@/features/Categories/consts/consts";
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
import { isCategory } from "@/features/Categories/utils/isCategory";
import MenuHelp from "../MenuHelp";

export type MenuTabs = "all" | "help" | "catalog" | TCategories;

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
      className="flex flex-col gap-6 max-w-[800px] w-full z-over-header pr-2"
      overlayClassName="z-over-header"
      side="left"
    >
      <SheetHeader className="flex flex-col items-start gap-8">
        <SheetTitle className="sr-only">Меню</SheetTitle>
        <SheetClose className="relative w-12 h-12 top-auto right-auto rounded-md bg-main opacity-100 [&_svg]:fill-white" />
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

      {tab === "all" && (
        <ScrollArea type="always">
          <div className="space-y-6 mr-4 sm:mr-6">
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
                <div
                  className="flex justify-between py-3"
                  role="button"
                  onClick={() => handleChangeTab("help")}
                >
                  <span className="text-body2 text-gray-dark">Помощь</span>
                  <ChevronDownIcon className="-rotate-90 fill-gray-dark" />
                </div>
              </li>

              <li>
                <Link
                  className="flex items-center justify-between py-3"
                  href={paths.contacts.getHref()}
                  onClick={() => setOpen(false)}
                >
                  <span className="text-body2 text-gray-dark">Контакты</span>
                </Link>
              </li>
            </ul>
          </div>
        </ScrollArea>
      )}
      {tab === "help" && <MenuHelp handleCloseSheet={() => setOpen(false)} />}
      {(tab === "catalog" || (tab && isCategory(tab))) && (
        <MobileCategories
          tab={tab}
          handleChangeTab={handleChangeTab}
          handleCloseSheet={() => setOpen(false)}
        />
      )}
    </SheetContent>
  );
};

export default MenuSheetContent;
