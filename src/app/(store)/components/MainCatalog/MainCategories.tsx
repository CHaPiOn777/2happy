"use client";

import { paths } from "@/config/paths";
import CategoryButton from "@/features/Categories/components/CategoryButton";
import CategoryLink from "@/features/Categories/components/CategoryLink";
import Container from "@/shared/components/UI/Container";
import { useScrollDirection } from "@/shared/hooks/useScrollDirection";
import { cn } from "@/shared/utils";

const MainCategories = () => {
  const show = useScrollDirection({ delayScroll: 600 });

  return (
    <div
      className={cn(
        "sticky top-[56px] sm:top-[80px] z-behind-header w-full bg-white transition-all duration-700 sm:duration-500",
        show
          ? "translate-y-0"
          : "-translate-y-[350px] sm:-translate-y-[200px] md:-translate-y-[150px]"
      )}
    >
      <Container className="py-3">
        <ul className="flex flex-wrap gap-4">
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
      </Container>
    </div>
  );
};

export default MainCategories;
