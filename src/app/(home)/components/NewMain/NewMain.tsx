import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import MainButton from "./components/MainButton";

const NewMain = () => {
  return (
    <Section className="border-b border-main h-[480px] xl:h-[865px] lg:h-[760px]">
      <Image
        fill
        className="object-cover"
        src="/images/Home/Main/main.jpg"
        alt="main-image"
      />
      <Container className="gap-6 items-center h-full">
        <div className="-mt-10 lg:-mt-24">
          <h1 className="text-h3Akira mb-8 lg:mb-10">2HAPPY</h1>
          <div className="flex gap-4">
            <span className="w-[64px] mt-4 h-[2px] bg-main" />
            <div className="flex flex-col max-w-[440px] w-full">
              <span className="text-h4 mb-10 lg:mb-20">
                Стильная и комфортная <br /> одежда на все случаи жизни!
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
