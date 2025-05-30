import ArrowRightIcon from "@/shared/components/icons/Arrows/ArrowRightIcon";
import ItemCard from "@/features/Products/components/Cards/ItemCard";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import Link from "next/link";
import { paths } from "@/config/paths";

const Bestsellers = () => {
  return (
    <Section className="bg-gradient-to-r from-main to-main/0">
      <div className="absolute w-full h-full bg-main z-[-2]" />
      <Image
        fill
        className="object-cover bg-main object-[100%_35%] z-[-1] scale-x-[-1] opacity-50"
        alt="bestseller-background"
        src={"/images/Home/Bestsellers/bg.jpg"}
      />
      <Container className="flex-col gap-12 my-20 lg:my-24">
        <h2 className="text-h2 text-white inline-block lg:hidden">
          Наши <br /> бестселлеры / 25
        </h2>
        <div className="grid grid-cols-[304px_400px] grid-rows-[224px_288px] lg:grid-cols-[392px_495px] lg:grid-rows-[320px_345px] gap-x-6">
          <ItemCard
            className="row-span-2"
            imageClassName="scale-x-[-1]"
            src="/images/Home/Bestsellers/card-1.jpg"
            href="/"
          />
          <div>
            <h2 className="text-h2 text-white hidden lg:inline-block">
              Наши бестселлеры / 25
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <Button
              className="text-white [&_svg]:fill-white"
              variant="tertiary"
              size="medium"
              asChild
            >
              <Link href={paths.catalog.bestsellers.getHref()}>
                Смотреть все <ArrowRightIcon />
              </Link>
            </Button>
            <ItemCard
              imageClassName="scale-x-[-1]"
              src="/images/Home/Bestsellers/card-2.jpg"
              href="/"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Bestsellers;
