import BookIcon from "@/shared/components/icons/Choose/BookIcon";
import FlowerIcon from "@/shared/components/icons/Choose/FlowerIcon";
import HandIcon from "@/shared/components/icons/Choose/HandIcon";
import MessageIcon from "@/shared/components/icons/Choose/MessageIcon";
import AnimatedInView from "@/shared/components/Motion/AnimatedInView";
import Container from "@/shared/components/UI/Container";
import { ScrollArea } from "@/shared/components/UI/ScrollArea";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";

const WhyChooseUsSection = () => {
  return (
    <Section className="bg-main">
      <Container className="my-section flex-col gap-16">
        <AnimatedInView
          as="h2"
          id="partners-choose-title"
          className="text-h2 text-white text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.6 }}
          fallbackClassName="opacity-0"
        >
          Почему выбирают нас:
        </AnimatedInView>
        <AnimatedInView
          as="ul"
          id="partners-choose-cards"
          className="grid grid-cols-1 md:grid-cols-partnersChooseLg lg:grid-cols-partnersChoose grid-rows-[212px_168px_212px] md:grid-rows-[192px_192px] gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          fallbackClassName="opacity-0"
        >
          <li className="relative md:col-span-2 flex flex-col items-center justify-end gap-6 flex-1 pt-8 px-7 pb-10 bg-black rounded-xs shadow-feature gradient-border">
            <div className="absolute w-full h-full top-0 z-10 bg-choose-gradient" />
            <Image
              fill
              className="object-cover object-[50%_22%] opacity-60"
              src="/images/Partnership/Choose/1.jpg"
              alt="choose-1"
            />
            <p className="text-h5 w-full text-start text-white-secondary text-center z-20">
              Стиль, доверие и честные условия <br /> — наша основа
            </p>
          </li>
          <li className="hidden md:flex col-span-2 flex-col items-center gap-4 lg:gap-6 flex-1 pt-8 px-7 pb-10 rounded-xs shadow-feature bg-white/10">
            <MessageIcon className="cursor-pointer shrink-0 size-10 lg:size-12" />
            <p className=" text-white-secondary text-center cursor-pointer">
              Лояльная <br /> и активная аудитория
            </p>
          </li>
          <li className="hidden md:flex flex-col items-center gap-4 lg:gap-6 flex-1 pt-8 px-7 pb-10 rounded-xs shadow-feature bg-white/10">
            <FlowerIcon className="shrink-0" />
            <p className=" text-white-secondary text-center">
              Креативный <br /> подход и гибкость
            </p>
          </li>
          <li className="hidden md:flex flex-col items-center gap-4 lg:gap-6 flex-1 pt-8 px-7 pb-10 rounded-xs shadow-feature bg-white/10">
            <BookIcon />
            <p className=" text-white-secondary text-center">
              Прозрачные <br /> условия сотрудничества
            </p>
          </li>
          <li className="hidden md:flex col-span-2 flex-col items-center gap-4 lg:gap-6 flex-1 pt-8 px-4 lg:px-7 pb-10 rounded-xs shadow-feature bg-white/10">
            <HandIcon className="shrink-0 size-10 lg:size-12" />
            <p className=" text-white-secondary text-center">
              Уникальный стиль и внимание <br className="hidden lg:block" /> к
              деталям
            </p>
          </li>
          <ScrollArea
            className=" md:hidden"
            scrollClassName="hidden"
            orientation="horizontal"
          >
            <li className="grid gap-4 grid-flow-col auto-cols-[296px]  h-full">
              <div className="flex flex-col items-center gap-4 flex-1 py-6 px-4 rounded-xs shadow-feature bg-white/10">
                <MessageIcon className="cursor-pointer shrink-0" />
                <p className=" text-white-secondary text-center cursor-pointer">
                  Лояльная <br /> и активная аудитория
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 flex-1 py-6 px-4 rounded-xs shadow-feature bg-white/10">
                <FlowerIcon className="shrink-0" />
                <p className=" text-white-secondary text-center">
                  Креативный <br /> подход и гибкость
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 flex-1 py-6 px-4 rounded-xs shadow-feature bg-white/10">
                <BookIcon />
                <p className=" text-white-secondary text-center">
                  Прозрачные <br /> условия сотрудничества
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 flex-1 py-6 px-4 rounded-xs shadow-feature bg-white/10">
                <HandIcon className="shrink-0" />
                <p className=" text-white-secondary text-center">
                  Уникальный стиль и внимание <br className="hidden lg:block" />{" "}
                  к деталям
                </p>
              </div>
            </li>
          </ScrollArea>
          <li className="relative md:col-span-2 flex flex-col items-center justify-end gap-6 flex-1 pt-8 px-7 pb-10 bg-black rounded-xs shadow-feature gradient-border">
            <div className="absolute w-full h-full top-0 z-10 bg-choose-gradient" />
            <Image
              fill
              className="object-cover object-[50%_22%] opacity-60"
              src="/images/Partnership/Choose/2.png"
              alt="choose-1"
            />
            <p className="text-h5 w-full text-start text-white-secondary text-center z-20">
              Стиль, доверие и честные условия <br /> — наша основа
            </p>
          </li>
        </AnimatedInView>
      </Container>
    </Section>
  );
};

export default WhyChooseUsSection;
