import { paths } from "@/config/paths";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import Link from "next/link";

const ProductsSection = () => {
  return (
    <Section className="my-section">
      <Container>
        <div className="grid grid-cols-aboutProductsLg lg:grid-cols-aboutProducts grid-rows-aboutProductsLg lg:grid-rows-aboutProducts gap-6">
          <div className="relative col-span-2 lg:col-span-1 lg:row-span-3">
            <Image
              fill
              className="object-cover"
              src="/images/About/Products/1.jpg"
              alt="product-1"
            />
          </div>
          <div className="relative lg:row-span-3">
            <Image
              fill
              className="object-cover"
              src="/images/About/2happy-90.png"
              alt="product-1"
            />
          </div>
          <div className="relative col-span-2 lg:col-span-1 lg:row-span-3">
            <Image
              fill
              className="object-cover"
              src="/images/About/Products/2.jpg"
              alt="product-2"
            />
          </div>
          <div className="relative row-span-2  lg:row-span-1">
            <Image
              fill
              className="object-cover"
              src="/images/About/Products/3.jpg"
              alt="product-3"
            />
          </div>
          <div className="relative">
            <Image
              fill
              className="object-cover"
              src="/images/About/Products/4.jpg"
              alt="product-4"
            />
          </div>
          <Button
            className="w-full row-start-3 col-start-4 col-span-2 self-end"
            asChild
          >
            <Link href={paths.catalog.getHref()}>
              в каталог <ArrowUpRightIcon />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default ProductsSection;
