import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import MainButton from "./MainButton";

const NewMain = () => {
  return (
    <Section className="border-b border-main bg-partnership-banner h-[480px] lg:h-[760px] xl:h-[865px]">
      <Image
        fill
        className="object-cover object-[50%_38%] -z-10 block xl:hidden"
        src="/images/Partnership/main-1280.jpg"
        alt="main-image"
      />
      <Image
        fill
        className="object-cover -z-10 hidden xl:block"
        src="/images/Partnership/main.jpg"
        alt="main-image"
      />
      <Container className="gap-6 items-center h-full">
        <div className="space-y-8 lg:-mt-6">
          <h1 className="text-h1 uppercase">
            Партнёрство <br /> с брендом 2HAPPY
          </h1>
          <div className="flex gap-4 lg:ml-[104px]">
            <span className="w-[64px] mt-4 h-[2px] bg-main" />
            <div className="flex flex-col gap-12 lg:gap-16 max-w-[456px] w-full">
              <span className="text-body1 lg:text-h5">
                Мы открыты к сотрудничеству и всегда рады новым возможностям.
                Если вы разделяете наши ценности — давайте расти вместе!
              </span>
              <MainButton />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default NewMain;
