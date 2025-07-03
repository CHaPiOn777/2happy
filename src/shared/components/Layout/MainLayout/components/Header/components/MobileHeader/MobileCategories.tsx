import ChevronDownIcon from "@/shared/components/icons/Chevron/ChevronDownIcon";
import { MenuTabs } from "./MenuSheet/MenuSheetContent";
import MobileCategoriesList from "./MobileCategoriesList";
import { isCategory } from "@/features/Categories/utils/isCategory";
import Link from "next/link";
import { paths } from "@/config/paths";

const MobileCategories = ({
  tab,
  handleChangeTab,
  handleCloseSheet,
}: {
  tab: MenuTabs;
  handleChangeTab: (newTab: MenuTabs) => void;
  handleCloseSheet: () => void;
}) => {
  if (isCategory(tab))
    return (
      <MobileCategoriesList tab={tab} handleCloseSheet={handleCloseSheet} />
    );

  return (
    <div className="flex flex-col gap-4">
      <Link href={paths.catalog.getHref()} onClick={handleCloseSheet}>
        <h3 className="text-h3 py-2">Каталог</h3>
      </Link>
      <ul>
        <li>
          <button
            className="flex items-center justify-between w-full py-3"
            onClick={() => handleChangeTab("accessories")}
          >
            <span className="text-button-normal">Аксессуары</span>
            <ChevronDownIcon className="size-6 -rotate-90" />
          </button>
        </li>

        <li>
          <button
            className="flex items-center justify-between w-full py-3"
            onClick={() => handleChangeTab("clothes")}
          >
            <span className="text-button-normal">Одежда</span>
            <ChevronDownIcon className="size-6 -rotate-90" />
          </button>
        </li>

        <li>
          <button
            className="flex items-center justify-between w-full py-3"
            onClick={() => handleChangeTab("outerwear")}
          >
            <span className="text-button-normal">Верхняя одежда</span>
            <ChevronDownIcon className="size-6 -rotate-90" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileCategories;
