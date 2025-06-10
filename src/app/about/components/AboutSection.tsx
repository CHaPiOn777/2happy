import { paths } from "@/config/paths";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
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
          <h2 className="text-h2 uppercase">кто мы /</h2>
          <p className="text-h5 lg:text-h4 ml-[136px] lg:ml-[184px]">
            Казахстанский бренд, вдохновлённый свободой, стилем <br />
            и индивидуальностью
          </p>
        </div>
        <div className="flex gap-[104px] h-[984px] lg:h-full">
          <div className="flex flex-col gap-8 lg:gap-12 justify-end lg:justify-between lg:max-w-[496px] w-full mr-[344px] lg:mr-0">
            <div className="space-y-4 mt-20">
              <p className="text-gray-dark">
                2Happy — это не просто вещи. Это про тебя, твою энергию и стиль,
                который говорит за тебя
              </p>
              <p className="text-gray-dark">
                Наша одежда — это гармония уличной эстетики и утончённой
                женственности.
              </p>
              <p className="text-gray-dark">
                Мы вдохновляемся ритмом большого города, свободой самовыражения
                и силой современной женщины. В каждой коллекции мы стремимся
                подчеркнуть характер и уникальность наших клиенток.
              </p>
            </div>
            <div className="flex flex-col items-center gap-12 lg:gap-[104px]">
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
          </div>
          <div className="absolute lg:relative right-6 w-full min-w-[570px] max-w-[630px] h-[984px] lg:h-[904px]">
            <div className="w-[368px] h-[532px] lg:h-[600px] absolute top-0 left-0 border-r-[24px] border-b-[24px] border-white z-10">
              <Image
                fill
                className="object-cover"
                src="/images/About/Who/1.jpg"
                alt="about-us-1"
              />
            </div>
            <div className="w-[256px] h-[352px] lg:h-[344px] absolute top-0 right-0 z-[1]">
              <Image
                fill
                className="object-cover"
                src="/images/About/Who/2.jpg"
                alt="about-us-2"
              />
            </div>
            <div className="w-[320px] h-[608px] lg:h-[536px] absolute bottom-0 right-0 z-[1]">
              <Image
                fill
                className="object-cover"
                src="/images/About/Who/3.jpg"
                alt="about-us-2"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutSection;
