import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";

const StatisticSection = () => {
  return (
    <Section className="h-auto md:h-[520px] xl:h-[912px] lg:h-[720px] bg-banner">
      <Image
        fill
        className="object-cover -z-10 -scale-x-100 object-[50%_20%]"
        src="/images/About/Statistic/bg.jpg"
        alt="statistic-bg"
      />
      <Container className="my-section items-center md:items-end">
        <div className="flex flex-col gap-8 md:flex-row justify-between w-full">
          <div className="flex flex-col h-full items-center gap-6 text-white">
            <div className="flex flex-col items-center gap-2">
              <span className="text-h2">15</span>
              <span className="text-h4">лет</span>
            </div>
            <p className="text-center">
              С 2010 года <br /> вдохновляем женщин быть собой
            </p>
          </div>
          <div className="flex flex-col h-full items-center gap-6 text-white">
            <div className="flex flex-col items-center gap-2">
              <span className="text-h2">100 000 +</span>
              <span className="text-h4">Клиенток</span>
            </div>
            <p className="text-center">
              Нас выбирают женщины <br /> по всему Казахстану и за его пределами
            </p>
          </div>
          <div className="flex flex-col h-full items-center gap-6 text-white">
            <div className="flex flex-col items-center gap-2">
              <span className="text-h2">200 +</span>
              <span className="text-h4">коллекций</span>
            </div>
            <p className="text-center">
              Каждый дроп — это отражение <br /> духа времени, свободы
              и индивидуальности
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default StatisticSection;
