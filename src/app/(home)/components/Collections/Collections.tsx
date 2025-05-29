import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import CollectionCard from "./components/CollectionCard";
import { paths } from "@/config/paths";
import {
  categoryIds,
  categorySlugs,
} from "@/features/Categories/consts/consts";
import Link from "next/link";

const Collections = () => {
  return (
    <Section className="my-section">
      <Container className="flex-col gap-16">
        <h2 className="text-h2">
          Готовые образы <br /> /
        </h2>
        <div className="grid h-full grid-cols-4 grid-rows-[repeat(7,80px)] gap-x-6">
          <CollectionCard
            className="row-span-5"
            title="На каждый день"
            href={paths.catalog.collections.category.getHref(
              categoryIds["everyDayCollection"],
              categorySlugs["everyDayCollection"],
              "На каждый день",
              categoryIds["collections"]
            )}
            src="/images/Home/Fashion/fashion-1.jpg"
          />
          <div className="w-full flex flex-col justify-between bg-main pt-10 pb-6 px-4 text-white text-center row-span-3">
            <span className="text-h5">
              С &quot;Образами 2Happy&quot; создать идеальный лук стало просто и
              удобно
            </span>
            <Button className="w-full" size="medium" asChild>
              <Link href={paths.catalog.collections.getHref("Готовые образы")}>
                Все образы <ArrowUpRightIcon />
              </Link>
            </Button>
          </div>
          <CollectionCard
            className="row-span-7"
            title="Спорт шик"
            href={paths.catalog.collections.category.getHref(
              categoryIds["sportCollection"],
              categorySlugs["sportCollection"],
              "Спорт шик",
              categoryIds["collections"]
            )}
            src="/images/Home/Fashion/fashion-3.jpg"
          />

          <CollectionCard
            className="row-span-6"
            title="Особенный вечер"
            href={paths.catalog.collections.category.getHref(
              categoryIds["specialEvening"],
              categorySlugs["specialEvening"],
              "Особенный вечер",
              categoryIds["collections"]
            )}
            src="/images/Home/Fashion/fashion-4.jpg"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Collections;
