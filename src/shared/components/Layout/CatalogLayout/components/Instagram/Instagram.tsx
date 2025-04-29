import InstagramCard from "@/features/Fashion/components/InstagramCard";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";

const Instagram = () => {
  return (
    <Section className="relative h-[1024px] bg-white">
      <Container className="flex-col gap-10 my-section">
        <h2 className="text-h2 ">
          #2happy <br />/
        </h2>
        <div className="grid grid-cols-4 grid-rows-[repeat(2,288px)] gap-6">
          <div className="text-body1 ">
            Откройте для себя больше вдохновения и стильных идей в нашем
            Instagram @2happy_kz! Будьте в курсе новинок, акций и трендов
          </div>
          <InstagramCard href="/" src="/images/Home/Instagram/1.jpg" />
          <InstagramCard
            href="/"
            className="row-span-2 col-span-2"
            src="/images/Home/Instagram/2.jpg"
          />
          <InstagramCard href="/" src="/images/Home/Instagram/3.jpg" />
          <InstagramCard href="/" src="/images/Home/Instagram/4.jpg" />
        </div>
      </Container>
    </Section>
  );
};

export default Instagram;
