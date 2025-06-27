import AnimatedInView from "@/shared/components/Motion/AnimatedInView";
import Container from "@/shared/components/UI/Container";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";

const HistorySection = () => {
  return (
    <Section className="mb-20 md:mb-section my-section">
      <Container className="flex-col gap-8 md:gap-16 md:mt-0">
        <div className="flex flex-col gap-6 sm:gap-8 md:max-w-[496px]">
          <AnimatedInView
            as="h2"
            id="about-history-title"
            className="text-h2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            fallbackClassName="opacity-0"
            viewport={{ once: true }}
          >
            история бренда /
          </AnimatedInView>
          <AnimatedInView
            as="p"
            id="about-history-desc"
            className="text-h4 w-full text-center md:text-end"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            fallbackClassName="opacity-0"
            viewport={{ once: true }}
          >
            с чего все начиналось
          </AnimatedInView>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-aboutHistory gap-6">
          <div className="flex flex-col gap-6">
            <div className="space-y-6">
              <p className="block md:hidden text-gray-dark">
                Идея создать 2НАРРУ родилась не случайно в 2010 году — из личной
                потребности в одежде, которая отражает характер,
                а не маскирует его. Мы не нашли на рынке того, что хотели носить
                сами: чего‑то сильного, стильного, женственного, но без лишнего
                глянца.
              </p>
              <AnimatedInView
                as="div"
                id="about-history-image-1"
                className="relative w-full h-[456px]"
                transition={{ duration: 0.6 }}
                animations={{
                  default: {
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                  },
                }}
                fallbackClassName="opacity-0"
                viewport={{ once: true, amount: 0.6 }}
              >
                <Image
                  fill
                  className="object-cover"
                  src="/images/About/History/1.jpg"
                  alt="history-1"
                />
              </AnimatedInView>
            </div>
            <div className="flex flex-col gap-6 lg:gap-0">
              <AnimatedInView
                as="div"
                id="about-history-desc-tablet-1"
                transition={{ duration: 0.6 }}
                animations={{
                  default: {
                    initial: { opacity: 0, y: -50 },
                    whileInView: { opacity: 1, y: 0 },
                  },
                }}
                fallbackClassName="opacity-0"
                viewport={{ once: true, amount: 0.6 }}
              >
                <div className="flex flex-col items-end space-y-6 md:space-y-12 text-gray-dark block lg:hidden">
                  <p className="w-full">
                    С первых дней мы знали, что не хотим быть просто ещё одной
                    маркой одежды. Мы хотели говорить с женщинами на одном
                    языке — языке свободы, уверенности и уличной эстетики.
                  </p>
                  <p className="w-full md:max-w-[304px]">
                    Начав с небольшой коллекции, которую сами же фотографировали
                    и продвигали через Instagram, мы быстро поняли: это нужно
                    не только нам.
                  </p>
                </div>
              </AnimatedInView>

              <div className="flex flex-row-reverse justify-end md:justify-normal md:flex-row gap-6">
                <AnimatedInView
                  as="div"
                  id="about-history-desc-1"
                  className="flex flex-col justify-end lg:justify-between"
                  transition={{ duration: 0.6 }}
                  animations={{
                    default: {
                      initial: { opacity: 0, y: -50 },
                      whileInView: { opacity: 1, y: 0 },
                    },
                  }}
                  fallbackClassName="opacity-0"
                  viewport={{ once: true, amount: 0.6 }}
                >
                  <div className="space-y-4 text-gray-dark hidden lg:block">
                    <p>
                      С первых дней мы знали, что не хотим быть просто ещё одной
                      маркой одежды. Мы хотели говорить с женщинами на одном
                      языке — языке свободы, уверенности и уличной эстетики.
                    </p>
                    <p>
                      Начав с небольшой коллекции, которую
                      сами же фотографировали и продвигали через Instagram,
                      мы быстро поняли: это нужно не только нам.
                    </p>
                  </div>
                  <div className="flex gap-5 lg:ml-16">
                    <span className="h-full w-[1px] bg-gray-dark" />
                    <p className="text-gray-dark">
                      «Сейчас нас выбирают те, кто ценит <br /> силу в деталях
                      и эстетику <br /> в каждом движении».
                    </p>
                  </div>
                </AnimatedInView>
                <AnimatedInView
                  as="div"
                  id="about-history-image-2"
                  className="w-full sm:w-[304px] h-[440px] lg:h-[480px] sm:shrink-0"
                  transition={{ duration: 0.6, delay: 0.3 }}
                  animations={{
                    default: {
                      initial: { opacity: 0 },
                      whileInView: { opacity: 1 },
                    },
                  }}
                  fallbackClassName="opacity-0"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <ImageWithLoader
                    fill
                    wrapperClassName="w-full h-full"
                    className="object-cover"
                    src="/images/About/History/2.jpg"
                    alt="history-2"
                  />
                </AnimatedInView>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col gap-6 lg:mt-6">
            <p className="hidden md:block">
              Идея создать 2НАРРУ родилась не случайно в 2010 году — из личной
              потребности в одежде, которая отражает характер,
              а не маскирует его. Мы не нашли на рынке того, что хотели носить
              сами: чего‑то сильного, стильного, женственного, но без лишнего
              глянца.
            </p>
            <AnimatedInView
              as="div"
              id="about-history-image-3"
              className="w-full relative h-[720px]"
              transition={{ duration: 0.6, delay: 0.6 }}
              animations={{
                default: {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                },
              }}
              fallbackClassName="opacity-0"
              viewport={{ once: true, amount: 0.6 }}
            >
              <Image
                fill
                className="object-cover"
                src="/images/About/History/3.jpg"
                alt="history-3"
              />
            </AnimatedInView>
            <div className=" max-w-[288px] w-full bg-white absolute right-0 -bottom-16 md:bottom-0 p-4 text-gray-dark">
              За каждым дропом стоит труд, поиск и страсть. Мы учились
              на ошибках, шили ночами, собирали отзывы и не сдавались.
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HistorySection;
