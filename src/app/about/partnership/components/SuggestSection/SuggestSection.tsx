import HangerIcon from "@/shared/components/icons/Suggest/HangerIcon";
import PhotoIcon from "@/shared/components/icons/Suggest/PhotoIcon";
import SewIcon from "@/shared/components/icons/Suggest/SewIcon";
import StarIcon from "@/shared/components/icons/Suggest/StarIcon";
import WriteIcon from "@/shared/components/icons/Suggest/WriteIcon";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import BecomePartnerButton from "./BecomePartnerButton";
import { ScrollArea } from "@/shared/components/UI/ScrollArea";
import AnimatedInView from "@/shared/components/Motion/AnimatedInView";

const SuggestSection = () => {
  return (
    <Section>
      <Container className="flex-col gap-8 sm:gap-12 md:gap-16 my-section mt-28 sm:mt-section md:my-[96px] lg:my-section">
        <AnimatedInView
          as="div"
          id="partners-suggest-title"
          className="text-h2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.6 }}
          fallbackClassName="opacity-0"
        >
          Что мы предлагаем /
        </AnimatedInView>

        <AnimatedInView
          as="div"
          id="partners-suggest-cards"
          className="flex flex-col gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          fallbackClassName="opacity-0"
        >
          <div className="grid grid-cols-[2.8fr_1.2fr_2fr] sm:grid-cols-[1fr_1fr] md:grid-cols-partnersSuggestFirstLg lg:grid-cols-partnersSuggestFirst grid-rows-[282px_136px_176px] sm:grid-rows-[176px_176px_minmax(176px,auto)_minmax(176px,auto)] md:grid-rows-[176px_176px_176px] lg:grid-rows-[176px_176px] gap-4 md:gap-6">
            <div className="relative sm:row-span-2">
              <Image
                fill
                className="object-cover"
                src="/images/Partnership/Suggest/1.jpg"
                alt="suggest-1"
              />
            </div>
            <div className="hidden sm:flex md:col-span-2 lg:col-span-1 gap-4 border border-main rounded-xs md:p-8 p-6 bg-white transition-colors hover:bg-gray-light cursor-pointer">
              <div className="flex items-end text-h5 w-full cursor-pointer">
                <span>
                  Совместные <br /> коллекции и капсулы
                </span>
              </div>
              <HangerIcon className="shrink-0 " />
            </div>
            <div className="relative col-start-3 sm:col-start-2 md:col-start-auto row-start-3 sm:row-start-auto">
              <Image
                fill
                className="object-cover"
                src="/images/Partnership/Suggest/2.jpg"
                alt="suggest-2"
              />
            </div>
            <div />
            <div className="relative row-span-2 hidden lg:block">
              <Image
                fill
                className="object-cover pt-[100px]"
                src="/images/Partnership/Suggest/3.jpg"
                alt="suggest-3"
              />
            </div>
            <div className="col-start-2 md:col-start-4 row-span-1 relative h-full hidden sm:block lg:hidden">
              <Image
                fill
                className="object-cover"
                src="/images/Partnership/Suggest/4.jpg"
                alt="suggest-5"
              />
            </div>

            <div className="block sm:hidden col-span-3 row-start-2">
              <ScrollArea orientation="horizontal" scrollClassName="hidden">
                <div className="grid grid-flow-col auto-cols-[260px] grid-rows-[136px] sm:hidden gap-4 col-span-3 row-start-2">
                  <div className="flex gap-4 border border-main rounded-xs p-4 bg-white transition-colors hover:bg-gray-light cursor-pointer">
                    <div className="flex items-end text-h5 w-full cursor-pointer">
                      <span>
                        Совместные <br /> коллекции и капсулы
                      </span>
                    </div>
                    <HangerIcon className="shrink-0 size-8" />
                  </div>
                  <div className="flex flex-col items-end justify-between border border-main rounded-xs p-4 bg-white transition-colors hover:bg-gray-light cursor-pointer">
                    <WriteIcon className="shrink-0 size-8" />
                    <p className="text-h5 w-full cursor-pointer">
                      Франшиза <br /> бренда 2HAPPY
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-between border border-main rounded-xs p-4 bg-white transition-colors hover:bg-gray-light cursor-pointer">
                    <StarIcon className="shrink-0 size-8" />
                    <p className="text-h5 w-full cursor-pointer">
                      Партнёрские проекты <br /> и спецмероприятия
                    </p>
                  </div>
                </div>
              </ScrollArea>
            </div>

            <div className="hidden sm:flex col-start-2 md:col-end-4 lg:col-end-auto lg:col-start-auto row-start-2 lg:row-start-auto flex-col items-end gap-4 border border-main rounded-xs md:p-8 p-6 bg-white transition-colors hover:bg-gray-light cursor-pointer">
              <WriteIcon />
              <p className="text-h5 w-full cursor-pointer">
                Франшиза <br /> бренда 2HAPPY
              </p>
            </div>
            <div className="hidden sm:flex md:col-span-2 row-start-3 lg:row-start-auto justify-between flex-col items-end gap-4 border border-main rounded-xs md:p-8 p-6 bg-white transition-colors hover:bg-gray-light cursor-pointer">
              <StarIcon className="shrink-0" />
              <p className="text-h5 w-full cursor-pointer">
                Партнёрские проекты <br /> и спецмероприятия
              </p>
            </div>
            <div className="relative w-full h-[80px] self-center col-start-2 md:col-start-3 row-start-3 hidden sm:block lg:hidden">
              <Image
                fill
                className="object-contain"
                src="/images/Partnership/Suggest/2happy.png"
                alt="suggest-4"
              />
            </div>
          </div>
          <div className="grid grid-cols-[3fr,1fr,2fr] sm:grid-cols-[1fr,2fr,3fr] lg:grid-cols-partnersSuggestSecond grid-rows-[136px_276px_76px_176px_56px] sm:grid-rows-[minmax(176px,auto)_176px_88px] lg:grid-rows-[176px_176px] gap-4 md:gap-6">
            <div className="relative col-span-2 sm:col-span-1 row-start-4 sm:row-start-auto w-full h-[80px] self-center block sm:hidden lg:block">
              <Image
                fill
                className="object-contain"
                src="/images/Partnership/Suggest/2happy.png"
                alt="suggest-4"
              />
            </div>
            <div className="relative col-start-3 row-start-4 sm:row-start-auto sm:col-end-3 md:col-start-auto md:col-end-auto block md:hidden lg:block">
              <Image
                fill
                className="object-cover object-top"
                src="/images/Partnership/Suggest/4.jpg"
                alt="suggest-5"
              />
            </div>

            <div className="block sm:hidden col-span-3 row-start-1">
              <ScrollArea orientation="horizontal" scrollClassName="hidden">
                <div className="grid grid-flow-col auto-cols-[260px] grid-rows-[136px] sm:hidden gap-4 col-span-3 row-start-2">
                  <div className="flex  flex-col items-end gap-4 border border-main rounded-xs p-4 bg-white transition-colors hover:bg-gray-light cursor-pointer">
                    <SewIcon />
                    <p className="text-h5 w-full cursor-pointer">
                      Корпоративные заказы <br /> и кастомизация
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-4 border border-main rounded-xs p-4 bg-white transition-colors hover:bg-gray-light cursor-pointer">
                    <PhotoIcon className="shrink-0" />
                    <p className="text-h5 w-full cursor-pointer">
                      Коллаборации <br /> с инфлюенсерами и амбассадорами
                    </p>
                  </div>
                </div>
              </ScrollArea>
            </div>

            <div className="relative col-start-1 row-start-2 sm:row-start-1 sm:row-end-3 block sm:hidden md:block lg:hidden">
              <Image
                fill
                className="object-cover"
                src="/images/Partnership/Suggest/3.jpg"
                alt="suggest-3"
              />
            </div>

            <div className="relative col-start-2 col-end-4 sm:col-start-1 sm:col-end-3 md:col-start-auto md:col-end-auto row-span-2 md:row-span-3 lg:row-span-2">
              <Image
                fill
                className="object-cover"
                src="/images/Partnership/Suggest/5.jpg"
                alt="suggest-6"
              />
            </div>

            <div className="hidden sm:flex col-start-3 lg:col-span-1 row-start-2 lg:row-start-auto flex-col items-end gap-4 border border-main rounded-xs md:p-8 p-6 bg-white transition-colors hover:bg-gray-light cursor-pointer">
              <SewIcon />
              <p className="text-h5 w-full cursor-pointer">
                Корпоративные заказы <br /> и кастомизация
              </p>
            </div>

            <div className="hidden sm:flex col-start-1 col-end-3 md:col-start-3 md:col-end-auto lg:col-span-2 row-start-1 lg:row-start-auto flex-col items-end gap-4 border border-main rounded-xs md:p-8 p-6 bg-white transition-colors hover:bg-gray-light cursor-pointer">
              <PhotoIcon className="shrink-0" />
              <p className="text-h5 w-full cursor-pointer">
                Коллаборации <br /> с инфлюенсерами и амбассадорами
              </p>
            </div>
            <BecomePartnerButton className="col-start-1 col-end-4  sm:col-start-3 sm:col-end-auto lg:col-start-auto row-start-5 sm:row-start-auto" />
          </div>
        </AnimatedInView>
      </Container>
    </Section>
  );
};

export default SuggestSection;
