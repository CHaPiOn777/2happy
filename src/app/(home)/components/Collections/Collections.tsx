import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import { paths } from "@/config/paths";
import {
  categoryIds,
  categorySlugs,
} from "@/features/Categories/consts/consts";
import Link from "next/link";
import ImageWithTitleCard from "@/features/Products/components/Cards/ImageWithTitleCard";

import AnimatedInView from "@/shared/components/Motion/AnimatedInView";
import CollectionButton from "./components/CollectionButton";

const Collections = () => {
  const everyDayLink = paths.catalog.collections.category.getHref(
    categoryIds["everyDayCollection"],
    categorySlugs["everyDayCollection"],
    "На каждый день",
    categoryIds["collections"]
  );

  const sportLink = paths.catalog.collections.category.getHref(
    categoryIds["sportCollection"],
    categorySlugs["sportCollection"],
    "Спорт шик",
    categoryIds["collections"]
  );

  const eveningLink = paths.catalog.collections.category.getHref(
    categoryIds["specialEvening"],
    categorySlugs["specialEvening"],
    "Особенный вечер",
    categoryIds["collections"]
  );

  return (
    <Section className="my-12 sm:my-section">
      <Container className="flex-col gap-8 sm:gap-12 lg:gap-16">
        <AnimatedInView
          as="h2"
          viewport={{ once: true, amount: "all" }}
          animations={{
            md: {
              initial: { opacity: 0, x: 200 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6, type: "tween" },
            },
            default: {
              initial: { opacity: 0, y: -80 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6, type: "tween" },
            },
          }}
          className="text-h2 w-min whitespace-nowrap"
        >
          Готовые образы <br className="hidden sm:block" /> /
        </AnimatedInView>

        <AnimatedInView
          as="div"
          viewport={{ once: true, amount: 0.3 }}
          animations={{
            default: {
              initial: { opacity: 0, y: 150 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6, type: "tween" },
            },
          }}
          className="grid h-full grid-cols-2 sm:grid-cols-collections-md md:grid-cols-collections-lg lg:grid-cols-4 grid-rows-collections-sm sm:grid-rows-collections-md md:grid-rows-collections-lg lg:grid-rows-[repeat(7,80px)] gap-6"
        >
          <ImageWithTitleCard
            className="col-start-1 md:row-span-2 lg:row-span-5"
            title="На каждый день"
            href={everyDayLink}
            src="/images/Home/Collections/fashion-1.jpg"
          />
          <div className="w-full flex flex-col justify-between sm:h-[272px] bg-main pt-6 pb-4 sm:pt-10 sm:pb-6 px-4 text-white text-center sm:col-start-3 md:col-start-2 lg:col-start-auto row-start-3 md:row-start-1 md:row-span-2 lg:row-span-4 ">
            <span className="text-title xs:text-body2 sm:text-h5">
              С &quot;Образами 2Happy&quot; создать идеальный лук стало просто и
              удобно
            </span>
            <CollectionButton />
          </div>
          <ImageWithTitleCard
            className="col-start-1 md:col-start-auto sm:col-end-3 md:col-end-auto row-span-2 row-start-3 md:row-start-auto md:row-span-4 lg:row-span-7"
            title="Спорт шик"
            href={sportLink}
            src="/images/Home/Collections/fashion-3.jpg"
          />
          <ImageWithTitleCard
            className="sm:col-start-2 sm:col-end-4 row-span-2 md:row-auto md:col-end-auto lg:col-start-auto md:row-start-2 md:row-end-4 lg:row-span-6"
            title="Особенный вечер"
            href={eveningLink}
            src="/images/Home/Collections/fashion-4.jpg"
          />
        </AnimatedInView>
      </Container>
    </Section>
  );
};

export default Collections;
