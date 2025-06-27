import { paths } from "@/config/paths";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import AnimatedInView from "@/shared/components/Motion/AnimatedInView";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import Link from "next/link";

const ProductsSection = () => {
  return (
    <Section>
      <Container className="flex-col gap-8 my-section">
        <div className="w-full grid grid-cols-aboutProductsMd md:grid-cols-aboutProductsLg lg:grid-cols-aboutProducts grid-rows-aboutProductsMd md:grid-rows-aboutProductsLg lg:grid-rows-aboutProducts gap-4 md:gap-6">
          <AnimatedInView
            as="div"
            id="about-products-image-1"
            className="relative row-start-2 md:row-start-auto md:col-span-2 lg:col-span-1 lg:row-span-3"
            transition={{ duration: 0.6 }}
            animations={{
              default: {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
              },
            }}
            fallbackClassName="opacity-0"
            viewport={{ once: true, amount: 0.6 }}
          >
            <Image
              fill
              className="object-cover object-top"
              src="/images/About/Products/1.jpg"
              alt="product-1"
            />
          </AnimatedInView>
          <AnimatedInView
            as="div"
            id="about-products-image-2"
            className="relative lg:row-span-3 hidden md:block"
            transition={{ duration: 0.6, delay: 0.2 }}
            animations={{
              default: {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
              },
            }}
            fallbackClassName="opacity-0"
            viewport={{ once: true, amount: 0.6 }}
          >
            <Image
              fill
              className="object-cover"
              src="/images/About/2happy-90.png"
              alt="product-1"
            />
          </AnimatedInView>

          <AnimatedInView
            as="div"
            id="about-products-image-3"
            className="relative col-span-2 col-start-2 md:col-start-auto lg:col-span-1 row-span-2 md:row-span-1 lg:row-span-3"
            transition={{ duration: 0.6, delay: 0.4 }}
            animations={{
              default: {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
              },
            }}
            fallbackClassName="opacity-0"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image
              fill
              className="object-cover object-top"
              src="/images/About/Products/2.jpg"
              alt="product-2"
            />
          </AnimatedInView>
          <AnimatedInView
            as="div"
            id="about-products-image-4"
            className="relative col-span-3 row-start-3 block md:hidden"
            transition={{ duration: 0.6, delay: 0.6 }}
            animations={{
              default: {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
              },
            }}
            fallbackClassName="opacity-0"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image
              fill
              className="object-contain"
              src="/images/2happy-black-text-logo.png"
              alt="product-1"
            />
          </AnimatedInView>
          <AnimatedInView
            as="div"
            id="about-products-image-5"
            className="relative col-span-2 md:col-span-1 row-span-2 lg:row-span-1"
            transition={{ duration: 0.6, delay: 0.8 }}
            animations={{
              default: {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
              },
            }}
            fallbackClassName="opacity-0"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image
              fill
              className="object-cover object-top"
              src="/images/About/Products/3.jpg"
              alt="product-3"
            />
          </AnimatedInView>

          <AnimatedInView
            as="div"
            id="about-products-image-5"
            className="relative"
            transition={{ duration: 0.6, delay: 1 }}
            animations={{
              default: {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
              },
            }}
            fallbackClassName="opacity-0"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image
              fill
              className="object-cover object-top"
              src="/images/About/Products/4.jpg"
              alt="product-4"
            />
          </AnimatedInView>
          <Button
            className="w-full row-start-4 col-start-5 md:col-start-4 col-span-2 self-end hidden md:inline-flex"
            asChild
          >
            <Link href={paths.catalog.getHref()}>
              в каталог <ArrowUpRightIcon />
            </Link>
          </Button>
        </div>
        <Button className="w-full inline-flex md:hidden" asChild>
          <Link href={paths.catalog.getHref()}>
            в каталог <ArrowUpRightIcon />
          </Link>
        </Button>
      </Container>
    </Section>
  );
};

export default ProductsSection;
