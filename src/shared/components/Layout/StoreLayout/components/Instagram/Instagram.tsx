import InstagramCard from "@/features/Products/components/Cards/InstagramCard";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";

const Instagram = () => {
  return (
    <Section className="relative bg-white">
      <Container className="flex-col gap-10 my-section">
        <h2 className="text-h2">
          #2happy <br />/
        </h2>
        <div className="grid grid-cols-instagram-lg lg:grid-cols-4 grid-rows-instagram-lg lg:grid-rows-[repeat(2,288px)] gap-6">
          <div className="text-body1">
            Откройте для себя больше вдохновения и стильных идей в нашем
            Instagram @2happy_kz! Будьте в курсе новинок, акций и трендов
          </div>
          <InstagramCard href="/" src="/images/Home/Instagram/1.jpg" />
          <InstagramCard
            href="/"
            className="pl-12 lg:pl-0 col-start-1 col-end-4 row-start-2 row-end-4 lg:row-span-2 lg:col-span-2"
            src="/images/Home/Instagram/2.jpg"
          />
          <InstagramCard
            className="col-start-4 lg:col-start-auto col-end-5 lg:col-end-auto row-start-2 lg:row-start-auto"
            href="/"
            src="/images/Home/Instagram/3.jpg"
          />
          <InstagramCard
            className="pr-12 lg:pr-0 col-start-3 lg:col-start-auto col-end-5 lg:col-end-auto row-start-1 lg:row-start-auto"
            href="/"
            src="/images/Home/Instagram/4.jpg"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Instagram;
