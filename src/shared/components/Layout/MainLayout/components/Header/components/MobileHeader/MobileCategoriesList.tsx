import { paths } from "@/config/paths";
import { getCategoriesQueryOptions } from "@/features/Categories/api/categoriesApi";
import {
  categoryIds,
  categoryNames,
  TCategories,
} from "@/features/Categories/consts/consts";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import { ScrollArea } from "@/shared/components/UI/ScrollArea";
import { useSuspenseQuery } from "@tanstack/react-query";
import Link from "next/link";

const MobileCategoriesList = ({
  tab,
  handleCloseSheet,
}: {
  tab: TCategories;
  handleCloseSheet: () => void;
}) => {
  const { data } = useSuspenseQuery(
    getCategoriesQueryOptions({
      parent: categoryIds[tab],
      per_page: 20,
    })
  );

  return (
    <div className="flex flex-col flex-1 overflow-hidden space-y-6">
      <h3 className="text-h3">{categoryNames[tab]}</h3>
      <ScrollArea type="always">
        <ul className="mr-2">
          {data.items.map((category) => (
            <li key={category.id}>
              <Link
                onClick={handleCloseSheet}
                href={paths.catalog.category.getHref(
                  category.id,
                  category.slug,
                  category.name,
                  category.parent
                )}
                className="flex items-center justify-between py-3 text-button-normal"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </ScrollArea>
      <Button
        variant="tertiary"
        className="px-2"
        onClick={handleCloseSheet}
        asChild
      >
        <Link href={paths.catalog.getHref()}>
          Смотреть все <ArrowUpRightIcon />
        </Link>
      </Button>
    </div>
  );
};

export default MobileCategoriesList;
