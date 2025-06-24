import ArrowRightIcon from "@/shared/components/icons/Arrows/ArrowRightIcon";
import ItemCard from "@/features/Products/components/Cards/ItemCard";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import Link from "next/link";
import { paths } from "@/config/paths";
import AnimatedInView from "@/shared/components/Motion/AnimatedInView";
import BestsellersButton from "./components/BestsellersButton";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";

const Bestsellers = () => {
  return (
    <Section className="bg-gradient-to-r from-main to-main/0">
      <div className="absolute w-full h-full bg-main z-[-2]" />
      <Image
        fill
        className="object-cover bg-main object-[50%_35%] sm:object-[40%_35%] md:object-[60%_35%] lg:object-[100%_35%] z-[-1] scale-x-[-1] opacity-70"
        alt="bestseller-background"
        src={"/images/Home/Bestsellers/bg.jpg"}
      />
      <Container className="flex-col gap-8 sm:gap-12 my-12 sm:my-16 md:my-20 lg:my-24">
        <AnimatedInView
          as="h2"
          viewport={{ once: true, amount: "all" }}
          animations={{
            md: {
              initial: { opacity: 0, x: 80 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6, type: "tween" },
            },
            lg: {
              initial: { opacity: 0, x: 100 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6, type: "tween" },
            },
            default: {
              initial: { opacity: 0, x: 80 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6, type: "tween" },
            },
          }}
          className="w-min whitespace-nowrap text-h2 text-white inline-block lg:hidden"
        >
          <span className="hidden md:inline-block">
            Наши <br /> бестселлеры / 25
          </span>
          <Link
            className="inline-block md:hidden"
            href={paths.catalog.bestsellers.getHref()}
          >
            Наши <br /> бестселлеры / 25
          </Link>
        </AnimatedInView>
        <div className="grid grid-cols-2 grid-rows-[158px_80px] xs:grid-rows-[216px_104px] sm:grid-rows-[334px_170px] md:grid-cols-[304px_400px] md:grid-rows-[224px_288px] lg:grid-cols-[392px_495px] lg:grid-rows-[320px_345px] gap-x-2 xs:gap-x-6">
          <AnimatedInView
            as="div"
            viewport={{ once: true, amount: 0.3 }}
            animations={{
              default: {
                initial: { opacity: 0, y: 200 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6, type: "tween" },
              },
            }}
            className="row-span-2"
          >
            <ItemCard
              className="w-full h-full"
              imageClassName="scale-x-[-1]"
              src="/images/Home/Bestsellers/card-1.jpg"
              href="/"
            />
          </AnimatedInView>
          <div>
            <AnimatedInView
              as="h2"
              viewport={{ once: true, amount: "all" }}
              animations={{
                xl: {
                  initial: { opacity: 0, x: 135 },
                  whileInView: { opacity: 1, x: 0 },
                  transition: { duration: 0.6, type: "tween" },
                },
                default: {
                  initial: { opacity: 0, x: 300 },
                  whileInView: { opacity: 1, x: 0 },
                  transition: { duration: 0.6, type: "tween" },
                },
              }}
              className="text-h2 text-white  hidden lg:inline-block"
            >
              Наши бестселлеры / 25
            </AnimatedInView>
          </div>

          <AnimatedInView
            as="div"
            viewport={{ once: true, amount: 0.4 }}
            animations={{
              md: {
                initial: { opacity: 0, y: 100 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6, type: "tween" },
              },
              lg: {
                initial: { opacity: 0, x: 200 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6, type: "tween" },
              },
              default: {
                initial: { opacity: 0, x: 100 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6, type: "tween" },
              },
            }}
            className="relative flex flex-col gap-8"
          >
            <BestsellersButton />
            <ItemCard
              imageClassName="scale-x-[-1] object-center"
              src="/images/Home/Bestsellers/card-2.jpg"
              href="/"
            />
          </AnimatedInView>
        </div>

        <AnimatedInView
          as="div"
          viewport={{ once: true, amount: 0.4 }}
          animations={{
            default: {
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6, type: "tween" },
            },
          }}
          className="block sm:hidden"
        >
          <Button
            className="inline-flex w-full border-white text-white [&_svg]:fill-white"
            variant={"secondary"}
            size={"medium"}
            asChild
          >
            <Link href={paths.catalog.bestsellers.getHref()}>
              Смотреть все <ArrowUpRightIcon />
            </Link>
          </Button>
        </AnimatedInView>
      </Container>
    </Section>
  );
};

export default Bestsellers;
