import CarIcon from "@/shared/components/icons/Features/CarIcon";
import ParcelIcon from "@/shared/components/icons/Features/ParcelIcon";
import QualityIcon from "@/shared/components/icons/Features/QualityIcon";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import { ReactNode } from "react";

import * as motion from "motion/react-client";

const FEATURES: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: <CarIcon />,
    title: "Быстрая доставка",
    text: "Отправляем заказы в кратчайшие сроки",
  },
  {
    icon: <QualityIcon />,
    title: "Гарантия качества",
    text: "Контроль на каждом этапе создания",
  },
  {
    icon: <ParcelIcon />,
    title: "Удобные способы получения",
    text: "Курьерская доставка или пункт выдачи",
  },
];

const Features = () => {
  return (
    <Section className="bg-main">
      <Container className="my-section">
        <ul className="flex flex-col md:flex-row w-full gap-6">
          {FEATURES.map((feature, index) => (
            <motion.li
              key={feature.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col items-center gap-6 flex-1 pt-6 sm:pt-8 px-4 sm:px-7 pb-8 sm:pb-10 rounded-xs shadow-feature bg-white/10"
            >
              {feature.icon}
              <div className="flex flex-col items-center gap-4 sm:gap-6">
                <h5 className="text-h5 text-white text-center">
                  {feature.title}
                </h5>
                <span className="text-white-secondary text-center">
                  {feature.text}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default Features;
