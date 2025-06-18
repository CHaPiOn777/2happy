"use client";

import { paths } from "@/config/paths";
import ImageWithTitleCard from "@/features/Products/components/Cards/ImageWithTitleCard";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";

const NotFound = ({ search }: { search: string }) => {
  return (
    <Section className="border-b-[1px] border-main">
      <Container className="flex-col gap-12 mt-12 mb-12 sm:mt-14 sm:mb-[136px]">
        <div className="flex flex-col gap-5 sm:gap-6">
          <h2 className="text-h3">Результаты поиска</h2>
          <div className="text-body2">
            Мы не нашли ничего по запросу:{" "}
            <span className="text-h5">{search}</span>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-body2 hidden sm:block">
            По вашему запросу ничего не найдено. Обратите внимание на новые
            подборки и рекомендации или посмотрите разделы с брендами и
            категориями, которые вам интересны.
          </div>
          <ul className="grid grid-cols-2 grid-rows-[376px_376px] sm:grid-cols-3 lg:grid-cols-4 sm:grid-rows-[552px] gap-6">
            <div className="text-description block sm:hidden">
              По вашему запросу ничего не найдено. Обратите внимание на новые
              подборки и рекомендации или посмотрите разделы с брендами и
              категориями, которые вам интересны.
            </div>
            <li>
              <ImageWithTitleCard
                title="Новая коллекция"
                href={paths.catalog.new_collection.getHref()}
                src="/images/Home/Fashion/fashion-3.jpg"
              />
            </li>
            <li>
              <ImageWithTitleCard
                title="Бестселлеры"
                href={paths.catalog.bestsellers.getHref()}
                src="/images/Home/Fashion/fashion-3.jpg"
              />
            </li>
            <li>
              <ImageWithTitleCard
                title="Распродажа"
                href={paths.catalog.final_sale.getHref()}
                src="/images/Home/Fashion/fashion-3.jpg"
              />
            </li>
            <li className="hidden lg:block">
              <ImageWithTitleCard
                title="Коллекции"
                href={paths.catalog.collections.getHref()}
                src="/images/Home/Fashion/fashion-3.jpg"
              />
            </li>
          </ul>
        </div>
      </Container>
    </Section>
  );
};

export default NotFound;
