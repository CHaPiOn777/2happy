import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import MainButton from "./MainButton";
import AnimatedInView from "@/shared/components/Motion/AnimatedInView";

const NewMain = () => {
  return (
    <Section className="border-b border-main bg-partnership-banner h-[448px] xs:h-[536px] sm:h-[480px] lg:h-[760px] xl:h-[865px]">
      <AnimatedInView
        as="div"
        id="partners-main-bg"
        className="w-full  absolute block xl:hidden h-[328px] xs:h-[440px] sm:h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        fallbackClassName="opacity-0"
      >
        <Image
          fill
          className="object-cover object-[40%_38%] xs:object-[65%_38%] sm:object-[50%_38%] -z-10"
          src="/images/Partnership/main-1280.jpg"
          alt="main-image"
        />
        <div className="absolute top-0 left-0 -scale-x-100 w-full h-full bg-image-gradient block md:hidden" />
      </AnimatedInView>
      <AnimatedInView
        as="div"
        id="partners-main-bg-big"
        className="absolute w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        fallbackClassName="opacity-0"
      >
        <Image
          fill
          className="object-cover -z-10 hidden xl:block"
          src="/images/Partnership/main.jpg"
          alt="main-image"
        />
      </AnimatedInView>

      <Container className="gap-6 sm:items-center h-full mb-12 sm:mb-0">
        <div className="flex flex-col gap-8 justify-between sm:justify-normal lg:-mt-6 z-20">
          <AnimatedInView
            as="h1"
            id="partners-main-title"
            className="text-h1 sm:text-h2 md:text-h1 uppercase mt-14 xs:mt-[104px] sm:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            fallbackClassName="opacity-0"
          >
            Партнёрство <br /> с брендом <br className="block sm:hidden" />{" "}
            2HAPPY
          </AnimatedInView>
          <AnimatedInView
            as="div"
            id="partners-main-title"
            className="flex gap-4 lg:ml-[104px] mb-8 sm:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            fallbackClassName="opacity-0"
          >
            <span className="w-[32px] md:w-[64px] mt-4 h-[1px] md:h-[2px] bg-main" />
            <div className="flex flex-col gap-12 lg:gap-16 max-w-[350px] md:max-w-[456px] w-full">
              <span className="text-body1 lg:text-h5">
                Мы открыты к сотрудничеству и всегда рады новым возможностям.
                Если вы разделяете наши ценности — давайте расти вместе!
              </span>
              <MainButton />
            </div>
          </AnimatedInView>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[192px] xs:h-[128px] block sm:hidden bg-[linear-gradient(to_top,_white_75%,_transparent)] z-10" />
      </Container>
    </Section>
  );
};

export default NewMain;
