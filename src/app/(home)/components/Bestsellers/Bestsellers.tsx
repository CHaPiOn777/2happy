import ArrowRightIcon from "@/shared/components/icons/Arrows/ArrowRightIcon";
import ItemCard from "@/features/Products/components/Cards/ItemCard";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import Link from "next/link";
import { paths } from "@/config/paths";
import AnimatedInView from "@/shared/components/Motion/AnimatedInView";

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
        <AnimatedInView
          as="h2"
          viewport={{ once: true, amount: "all" }}
          animations={{
            lg: {
              initial: { opacity: 0, translateX: 300 },
              whileInView: { opacity: 1, translateX: 0 },
              transition: { duration: 0.6, type: "tween" },
            },
            default: {
              initial: { opacity: 0, translateX: 500 },
              whileInView: { opacity: 1, translateX: 0 },
              transition: { duration: 0.6, type: "tween" },
            },
          }}
          className="w-min whitespace-nowrap text-h2 text-white inline-block lg:hidden"
        >
          Наши <br /> бестселлеры / 25
        </AnimatedInView>
        <div className="grid grid-cols-[304px_400px] grid-rows-[224px_288px] lg:grid-cols-[392px_495px] lg:grid-rows-[320px_345px] gap-x-6">
          <AnimatedInView
            as="div"
            viewport={{ once: true, amount: 0.3 }}
            animations={{
              default: {
                initial: { opacity: 0, translateY: 200 },
                whileInView: { opacity: 1, translateY: 0 },
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
                  initial: { opacity: 0, translateX: 150 },
                  whileInView: { opacity: 1, translateX: 0 },
                  transition: { duration: 0.6, type: "tween" },
                },
                default: {
                  initial: { opacity: 0, translateX: 300 },
                  whileInView: { opacity: 1, translateX: 0 },
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
              default: {
                initial: { opacity: 0, translateX: 300 },
                whileInView: { opacity: 1, translateX: 0 },
                transition: { duration: 0.6, type: "tween" },
              },
            }}
            className="flex flex-col gap-8"
          >
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
          </AnimatedInView>
        </div>
      </Container>
    </Section>
  );
};

export default Bestsellers;
