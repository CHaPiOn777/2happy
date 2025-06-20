import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";

const Main = () => {
  return (
    <Section className="pt-12 pb-14 md:pb-20 border-b border-main h-[480px] xl:h-[865px] lg:h-[760px] bg-about-main-gradient">
      <Image
        fill
        className="object-cover -z-10 object-[65%_50%] md:object-[50%_50%]"
        src="/images/About/Main/bg.png"
        alt="main-image"
      />
      <Container className="flex-col gap-6 items-start md:items-center justify-end lg:justify-center h-full">
        <div>
          <h1 className="text-h3Akira text-white mb-6 md:mb-10">2HAPPY</h1>
          <div className="flex gap-4 md:gap-8">
            <span className="w-[40px] md:w-[64px] mt-4 h-[2px] bg-white" />
            <p className="text-h4 md:text-h3 max-w-[330px] w-full text-white">
              Одежда,
              <br className="block md:hidden" /> которая{" "}
              <br className="hidden md:block" /> говорит за тебя
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Main;
