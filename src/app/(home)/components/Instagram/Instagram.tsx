import InstagramCard from "@/features/Products/components/Cards/InstagramCard";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";

import * as motion from "motion/react-client";

const Instagram = () => {
  return (
    <Section className="relative bg-main">
      <Container className="flex-col gap-10 my-section">
        <motion.h2
          initial={{ opacity: 0, y: -150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "tween" }}
          className="text-h2 text-white"
        >
          #2happy <br />/
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="grid grid-cols-instagram-md md:grid-cols-instagram-lg lg:grid-cols-4 grid-rows-instagram-md md:grid-rows-instagram-lg lg:grid-rows-[repeat(2,288px)] gap-6"
        >
          <div className="text-body1 text-white">
            Откройте для себя больше вдохновения и стильных идей в нашем
            Instagram @2happy_kz! Будьте в курсе новинок, акций и трендов
          </div>
          <InstagramCard href="/" src="/images/Home/Instagram/1.jpg" />
          <InstagramCard
            href="/"
            className="md:pl-12 lg:pl-0 col-start-2 col-end-5 md:col-start-1 md:col-end-4 row-start-1 row-span-2 md:row-start-2 md:row-end-4 lg:row-span-2 lg:col-span-2"
            src="/images/Home/Instagram/2.jpg"
          />
          <InstagramCard
            className="col-start-1 md:col-start-4 lg:col-start-auto md:col-end-5 lg:col-end-auto row-start-3 md:row-start-2 lg:row-start-auto"
            href="/"
            src="/images/Home/Instagram/3.jpg"
          />
          <InstagramCard
            className="md:pr-12 lg:pr-0 col-start-1 md:col-start-3 lg:col-start-auto md:col-end-5 lg:col-end-auto row-start-2 md:row-start-1 lg:row-start-auto"
            href="/"
            src="/images/Home/Instagram/4.jpg"
          />
        </motion.div>
      </Container>
    </Section>
  );
};

export default Instagram;
