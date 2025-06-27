import { paths } from "@/config/paths";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import AnimatedInView from "@/shared/components/Motion/AnimatedInView";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <Section className="border-b border-main">
      <Container className="my-section flex-col gap-16">
        <div className="flex flex-col gap-8">
          <AnimatedInView
            as="h2"
            id="about-who-title"
            className="text-h2 uppercase"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            fallbackClassName="opacity-0"
            viewport={{ once: true }}
          >
            Кто мы /
          </AnimatedInView>
          <AnimatedInView
            as="div"
            id="about-who-desc"
            className="flex justify-end md:justify-normal"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            fallbackClassName="opacity-0"
            viewport={{ once: true }}
          >
            <p className="text-h5 lg:text-h4 w-full max-w-[344px] sm:max-w-[430px] md:max-w-full text-left md:ml-[136px] lg:ml-[184px] text-gray-dark">
              Казахстанский бренд, вдохновлённый свободой, стилем{" "}
              <br className="hidden md:block" />
              и индивидуальностью
            </p>
          </AnimatedInView>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-[104px] md:h-[984px] lg:h-full">
          <AnimatedInView
            as="div"
            id="about-who-text"
            className="relative -mt-20 md:mt-0 z-20 flex flex-col gap-8 lg:gap-12 justify-end lg:justify-between lg:max-w-[496px] w-full mr-[344px] lg:mr-0"
            transition={{ duration: 0.6 }}
            animations={{
              default: {
                initial: { opacity: 0, x: -50 },
                whileInView: { opacity: 1, x: 0 },
              },
            }}
            fallbackClassName="opacity-0"
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-4 md:mt-20 ">
              <p className="text-gray-dark hidden md:block bg-white">
                2Happy — это не просто вещи. Это про тебя, твою энергию и стиль,
                который говорит за тебя
              </p>
              <p className="text-gray-dark max-w-[312px] md:max-w-full pt-4 pr-4 bg-white">
                Наша одежда — это гармония уличной эстетики и утончённой
                женственности.
              </p>
              <p className="text-gray-dark">
                Мы вдохновляемся ритмом большого города, свободой самовыражения
                и силой современной женщины. В каждой коллекции мы стремимся
                подчеркнуть характер и уникальность наших клиенток.
              </p>
            </div>
            <div className="flex flex-col md:items-center gap-12 lg:gap-[104px] bg-white">
              <div className="flex gap-5">
                <span className="h-full w-[1px] bg-gray-dark" />
                <div className="flex flex-col gap-4">
                  <p className="text-h5-italic text-gray-dark">
                    «Одежда — это голос. Говори громко. Будь собой».
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="w-[24px] h-[1px] bg-gray-middle" />
                    <span className="text-gray-middle">
                      Татьяна и Алия. Основатели бренда 2Happy
                    </span>
                  </div>
                </div>
              </div>

              <Button className="w-full" asChild>
                <Link href={paths.catalog.getHref()}>
                  смотреть каталог <ArrowUpRightIcon />
                </Link>
              </Button>
            </div>
          </AnimatedInView>
          <div className="grid overflow-hidden md:block gap-y-6 grid-cols-[1.2fr,1fr] grid-rows-aboutWeMd relative md:absolute lg:relative md:right-6 w-full md:min-w-[570px] md:max-w-[630px] md:h-[984px] lg:h-[904px] z-10">
            <AnimatedInView
              as="div"
              id="about-who-image-1"
              className="flex flex-col w-full h-full row-span-2 md:w-[368px] md:h-[532px] lg:h-[600px] relative md:absolute md:top-0 md:left-0 md:border-r-[24px] md:border-b-[24px] border-white z-10"
              transition={{ duration: 0.6 }}
              animations={{
                default: {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                },
              }}
              fallbackClassName="opacity-0"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                fill
                className="object-cover"
                src="/images/About/Who/1.jpg"
                alt="about-us-1"
              />
            </AnimatedInView>
            <AnimatedInView
              as="p"
              id="about-who-image-text"
              className="block row-start-2 col-start-2 md:hidden text-gray-dark pl-4"
              transition={{ duration: 0.6, delay: 0.3 }}
              animations={{
                default: {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                },
              }}
              fallbackClassName="opacity-0"
              viewport={{ once: true }}
            >
              2Happy — это не просто вещи. Это про тебя, твою энергию и стиль,
              который говорит за тебя
            </AnimatedInView>

            <AnimatedInView
              as="div"
              id="about-who-image-2"
              className="w-full h-full md:w-[256px] md:h-[352px] lg:h-[344px] relative md:absolute md:top-0 md:right-0 z-[1] ml-4 md:ml-0 mb-4 md:mb-0"
              transition={{ duration: 0.6, delay: 0.3 }}
              animations={{
                default: {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                },
              }}
              fallbackClassName="opacity-0"
              viewport={{ once: true, amount: 0.8 }}
            >
              <Image
                fill
                className="object-cover -scale-x-100 md:scale-x-100"
                src="/images/About/Who/2.jpg"
                alt="about-us-2"
              />
            </AnimatedInView>

            <div></div>
            <AnimatedInView
              as="div"
              id="about-who-image-3"
              className="w-full h-full col-start-2 row-start-3 md:w-[320px] md:h-[608px] lg:h-[536px] relative md:absolute md:bottom-0 md:right-0 z-[1]"
              transition={{ duration: 0.6, delay: 0.6 }}
              animations={{
                default: {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                },
              }}
              fallbackClassName="opacity-0"
              viewport={{ once: true, amount: 0.4 }}
            >
              <Image
                fill
                className="object-cover object-top"
                src="/images/About/Who/3.jpg"
                alt="about-us-3"
              />
            </AnimatedInView>
            <div></div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutSection;
