import Container from "@/shared/components/UI/Container";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";

const HistorySection = () => {
  return (
    <Section>
      <Container className="flex-col gap-16 my-section">
        <div className="flex flex-col gap-8 max-w-[496px]">
          <h2 className="text-h2">история бренда /</h2>
          <p className="text-h4 w-full text-end">с чего все начиналось</p>
        </div>
        <div className="grid grid-cols-aboutHistory gap-x-6">
          <div className="flex flex-col gap-6">
            <div className="relative w-full h-[456px]">
              <Image
                fill
                className="object-cover"
                src="/images/About/History/1.jpg"
                alt="history-1"
              />
            </div>
            <div className="flex flex-col gap-6 lg:gap-0">
              <div>
                <div className="flex flex-col items-end space-y-12 text-gray-dark block lg:hidden">
                  <p className="w-full">
                    С первых дней мы знали, что не хотим быть просто ещё одной
                    маркой одежды. Мы хотели говорить с женщинами на одном
                    языке — языке свободы, уверенности и уличной эстетики.
                  </p>
                  <p className="w-full max-w-[304px]">
                    Начав с небольшой коллекции, которую сами же фотографировали
                    и продвигали через Instagram, мы быстро поняли: это нужно
                    не только нам.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col justify-end lg:justify-between">
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
                </div>
                <ImageWithLoader
                  wrapperClassName="w-[304px] h-[440px] lg:h-[480px] shrink-0"
                  className="object-cover"
                  src="/images/About/History/2.jpg"
                  alt="history-2"
                />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col gap-6 lg:mt-6">
            <p>
              Идея создать 2НАРРУ родилась не случайно в 2010 году — из личной
              потребности в одежде, которая отражает характер,
              а не маскирует его. Мы не нашли на рынке того, что хотели носить
              сами: чего‑то сильного, стильного, женственного, но без лишнего
              глянца.
            </p>
            <div className="w-full relative h-[720px]">
              <Image
                fill
                className="object-cover"
                src="/images/About/History/3.jpg"
                alt="history-3"
              />
            </div>
            <div className=" max-w-[288px] w-full bg-white absolute right-0 bottom-0 p-4 text-gray-dark">
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
