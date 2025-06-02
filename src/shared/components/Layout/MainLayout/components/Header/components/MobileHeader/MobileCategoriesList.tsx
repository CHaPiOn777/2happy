import { paths } from "@/config/paths";
import { getCategoriesQueryOptions } from "@/features/Categories/api/categoriesApi";
import { categoryIds, TCategories } from "@/features/Categories/consts/consts";
import ChevronDownIcon from "@/shared/components/icons/Chevron/ChevronDownIcon";
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
            className="flex items-center justify-between py-3"
          >
            <span className="text-button-normal">{category.name}</span>
            <ChevronDownIcon className="size-6 -rotate-90" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileCategoriesList;
