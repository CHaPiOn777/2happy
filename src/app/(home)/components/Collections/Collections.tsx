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

import * as motion from "motion/react-client";
import AnimatedInView from "@/shared/components/Motion/AnimatedInView";

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
    <Section className="my-section">
      <Container className="flex-col gap-12 lg:gap-16">
        <AnimatedInView
          as="h2"
          viewport={{ once: true, amount: "all" }}
          animations={{
            default: {
              initial: { opacity: 0, translateX: 400 },
              whileInView: { opacity: 1, translateX: 0 },
              transition: { duration: 0.6, type: "tween" },
            },
          }}
          className="text-h2 w-min whitespace-nowrap"
        >
          Готовые образы <br /> /
        </AnimatedInView>

        <AnimatedInView
          as="div"
          viewport={{ once: true, amount: 0.3 }}
          animations={{
            default: {
              initial: { opacity: 0, translateY: 150 },
              whileInView: { opacity: 1, translateY: 0 },
              transition: { duration: 0.6, type: "tween" },
            },
          }}
          className="grid h-full grid-cols-collections-lg lg:grid-cols-4 grid-rows-collections-lg lg:grid-rows-[repeat(7,80px)] gap-6"
        >
          <ImageWithTitleCard
            className="row-span-2 lg:row-span-5"
            title="На каждый день"
            href={everyDayLink}
            src="/images/Home/Fashion/fashion-1.jpg"
          />
          <div className="w-full flex flex-col justify-between bg-main pt-10 pb-6 px-4 text-white text-center col-start-2 lg:col-start-auto row-start-1 row-span-2 lg:row-span-4 h-[272px]">
            <span className="text-h5">
              С &quot;Образами 2Happy&quot; создать идеальный лук стало просто и
              удобно
            </span>
            <Button
              className="w-full text-white [&_svg]:fill-white [&_svg]:stroke-white"
              variant="tertiary"
              size="medium"
              asChild
            >
              <Link href={paths.catalog.collections.getHref("Готовые образы")}>
                Все образы <ArrowUpRightIcon />
              </Link>
            </Button>
          </div>
          <ImageWithTitleCard
            className="row-span-4 lg:row-span-7"
            title="Спорт шик"
            href={sportLink}
            src="/images/Home/Fashion/fashion-3.jpg"
          />
          <ImageWithTitleCard
            className="col-start-2 lg:col-start-auto row-start-2 row-end-4 lg:row-span-6"
            title="Особенный вечер"
            href={eveningLink}
            src="/images/Home/Fashion/fashion-4.jpg"
          />
        </AnimatedInView>
      </Container>
    </Section>
  );
};

export default Collections;
