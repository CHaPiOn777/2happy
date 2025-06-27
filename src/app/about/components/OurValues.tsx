import DiamondIcon from "@/shared/components/icons/Values/DiamondIcon";
import HeartValueIcon from "@/shared/components/icons/Values/HeartValueIcon";
import InspirationIcon from "@/shared/components/icons/Values/InspirationIcon";
import LeafIcon from "@/shared/components/icons/Values/LeafIcon";
import AnimatedInView from "@/shared/components/Motion/AnimatedInView";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";

const OurValues = () => {
  return (
    <Section>
      <Container className="flex-col gap-16 my-section">
        <div className="flex flex-col gap-8 w-full">
          <AnimatedInView
            as="h2"
            id="about-values-title"
            className="text-h2 text-left md:text-end w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            fallbackClassName="opacity-0"
            viewport={{ once: true }}
          >
            Наши ценности /
          </AnimatedInView>
          <AnimatedInView
            as="p"
            id="about-values-desc"
            className="text-h5 text-gray-dark md:text-main md:text-h4 w-full text-center md:text-left md:w-max md:ml-[136px] lg:ml-[184px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            fallbackClassName="opacity-0"
            viewport={{ once: true }}
          >
            Что мы ставим в приоритет
          </AnimatedInView>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatedInView
            as="div"
            id="about-values-1"
            className="w-full flex flex-col items-center gap-2 sm:gap-6 bg-white p-4 shadow-value"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            fallbackClassName="opacity-0"
            viewport={{ once: true, amount: 0.8 }}
          >
            <InspirationIcon />
            <span className="text-body1 text-center">
              Делиться <br className="hidden sm:block" /> вдохновением
            </span>
          </AnimatedInView>
          <AnimatedInView
            as="div"
            id="about-values-2"
            className="w-full flex flex-col items-center gap-6 bg-white p-4 shadow-value"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            fallbackClassName="opacity-0"
            viewport={{ once: true, amount: 0.8 }}
          >
            <LeafIcon />
            <span className="text-body1 text-center">
              Быть <br className="hidden sm:block" /> естественными
            </span>
          </AnimatedInView>
          <AnimatedInView
            as="div"
            id="about-values-3"
            className="w-full flex flex-col items-center gap-6 bg-white p-4 shadow-value"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            fallbackClassName="opacity-0"
            viewport={{ once: true, amount: 0.8 }}
          >
            <HeartValueIcon />
            <span className="text-body1 text-center">
              Создавать <br className="hidden sm:block" /> настроение
            </span>
          </AnimatedInView>
          <AnimatedInView
            as="div"
            id="about-values-4"
            className="w-full flex flex-col items-center gap-6 bg-white p-4 shadow-value"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            fallbackClassName="opacity-0"
            viewport={{ once: true, amount: 0.8 }}
          >
            <DiamondIcon />
            <span className="text-body1 text-center">
              Выражать <br className="hidden sm:block" /> индивидуальность
            </span>
          </AnimatedInView>
        </div>
      </Container>
    </Section>
  );
};

export default OurValues;
