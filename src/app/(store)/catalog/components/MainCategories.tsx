import { paths } from "@/config/paths";
import CategoryButton from "@/features/Categories/components/CategoryButton";
import CategoryLink from "@/features/Categories/components/CategoryLink";

const MainCategories = () => {
  return (
    <ul className="flex gap-4">
      <li>
        <CategoryButton
          href={paths.catalog.new_collection.getHref("Новая коллекция")}
        >
          Новинки
        </CategoryButton>
      </li>
      <li>
        <CategoryButton asChild>
          <CategoryLink category="clothes" name="Одежда">
            Одежда
          </CategoryLink>
        </CategoryButton>
      </li>
      <li>
        <CategoryButton asChild>
          <CategoryLink category="accessories" name="Аксессуары">
            Аксессуары
          </CategoryLink>
        </CategoryButton>
      </li>
      <li>
        <CategoryButton asChild>
          <CategoryLink category="outerwear" name="Верхняя одежда">
            Верхняя одежда
          </CategoryLink>
        </CategoryButton>
      </li>
      <li>
        <CategoryButton href={paths.catalog.bestsellers.getHref()}>
          Бестселлеры
        </CategoryButton>
      </li>
      <li>
        <CategoryButton
          href={paths.catalog.collections.getHref("Готовые образы")}
        >
          Коллекции
        </CategoryButton>
      </li>
      <li>
        <CategoryButton
          className="text-red"
          href={paths.catalog.final_sale.getHref()}
        >
          Final sale
        </CategoryButton>
      </li>
    </ul>
  );
};

export default MainCategories;
