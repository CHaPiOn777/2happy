import CheckIcon from "@/shared/components/icons/CheckIcon";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import LoyalButton from "./LoyalButton";
import AnimatedInView from "@/shared/components/Motion/AnimatedInView";

const LoyalSection = () => {
  return (
    <Section>
      <Container className="my-section flex-col gap-16">
        <div className="space-y-8">
          <AnimatedInView
            as="h2"
            id="partners-loyal-title"
            className="text-h2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.6 }}
            fallbackClassName="opacity-0"
          >
            Программа лояльности <br /> для стилистов /
          </AnimatedInView>
          <AnimatedInView
            as="p"
            id="partners-loyal-desc"
            className="text-h5 md:text-h4 w-full text-left md:text-end pl-[104px] md:pl-0 md:pr-[100px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.6 }}
            fallbackClassName="opacity-0"
          >
            Работайте с клиентами и получайте вознаграждение за покупки
          </AnimatedInView>
        </div>
        <div className="flex flex-col md:flex-row gap-6 lg:gap-16">
          <AnimatedInView
            as="div"
            id="partners-loyal-left"
            className="flex flex-col gap-6 w-full max-w-[384px] lg:max-w-[496px]"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.6 }}
            fallbackClassName="opacity-0"
          >
            <p className="hidden lg:block">
              Мы рады предложить стилистам возможность принять участие
              в партнёрской программе 2НАРРУ, в рамках которой вы сможете
              работать со своими клиентами и получать вознаграждение
              за совершённые ими покупки в наших магазинах
            </p>
            <div className="relative w-[232px] sm:w-[362px] md:w-full h-[320px] sm:h-[480px] md:h-full lg:h-[624px]">
              <Image
                fill
                className="object-cover -scale-x-100"
                src="/images/Partnership/Loyal/1.jpg"
                alt="loyal-1"
              />
            </div>
          </AnimatedInView>
          <AnimatedInView
            as="div"
            id="partners-loyal-left"
            className="flex flex-col gap-8 md:gap-12 lg:gap-20 justify-end w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.6 }}
            fallbackClassName="opacity-0"
          >
            <p className="block lg:hidden">
              Мы рады предложить стилистам возможность принять участие
              в партнёрской программе 2НАРРУ, в рамках которой вы сможете
              работать со своими клиентами и получать вознаграждение
              за совершённые ими покупки в наших магазинах
            </p>
            <div className="space-y-6">
              <h5 className="text-h5">Как это работает?</h5>
              <ul className="flex flex-col gap-4 text-placeholder text-gray-dark">
                <li className="flex gap-2 text-gray-dark">
                  <div className="w-6 h-6 bg-black mt-1">
                    <CheckIcon className="fill-white" />
                  </div>
                  Вам необходимо написать нам на Whatsapp и подать заявку
                  на участие в программе лояльности, после чего вы получите
                  карту стилиста
                </li>
                <li className="flex gap-2 text-gray-dark">
                  <div className="w-6 h-6 bg-black mt-1">
                    <CheckIcon className="fill-white" />
                  </div>
                  Вы подбираете образы для ваших клиентов из ассортимента бренда
                  2НАРРУ и предоставляете свою карту стилиста при совершении
                </li>
                <li className="flex gap-2 text-gray-dark">
                  <div className="w-6 h-6 bg-black mt-1">
                    <CheckIcon className="fill-white" />
                  </div>
                  За каждую покупку, сделанную вашим клиентом, вы будете
                  получать вознаграждение — 10% от суммы в чеке
                  (после вычета НДС). В денежном эквиваленте.
                </li>
                <li className="flex gap-2 text-gray-dark">
                  <div className="w-6 h-6 bg-black mt-1">
                    <CheckIcon className="fill-white" />
                  </div>
                  Выплаты за прошлый месяц считаются в следующем и производятся
                  раз в месяц
                </li>
              </ul>
            </div>
            <LoyalButton />
          </AnimatedInView>
        </div>
      </Container>
    </Section>
  );
};

export default LoyalSection;
