import ArrowRightIcon from "@/shared/components/icons/Arrows/ArrowRightIcon";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import { paths } from "@/config/paths";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "./consts";
import CategoryLink from "@/features/Categories/components/CategoryLink";

const Categories = () => {
  return (
    <Section className="border-b-[1px] border-b-main">
      <Container className="justify-between gap-[176px] my-section">
        <div className="flex flex-col justify-between w-full lg:basis-[392px]">
          <h2 className="text-h2 mt-12 lg:mt-0">
            Категории <br /> /
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 grid-rows-[28px,128px]">
            <Link
              href={paths.catalog.getHref()}
              className="link-hover col-span-2 text-button-medium"
            >
              Смотреть все <ArrowRightIcon />
            </Link>
            <div className="relative">
              <Image
                fill
                src="/images/Home/Categories/category-1.jpg"
                className="object-cover object-top"
                alt="category-image"
              />
            </div>
            <div className="relative">
              <Image
                fill
                className="object-cover object-center"
                src="/images/2happy-logo-black.jpg"
                alt="category-image"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:basis-[600px] flex flex-col">
          {CATEGORIES.map((category) => (
            <Button
              key={category.name}
              variant="tertiary"
              size="large"
              className="w-full justify-between p-4 text-h5 border-b-[1px] border-main"
              asChild
            >
              <CategoryLink
                category={category.slug}
                name={category.name}
                parent={category.parent}
              >
                {category.name} <ArrowUpRightIcon />
              </CategoryLink>
            </Button>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Categories;
