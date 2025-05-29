import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";

const Result = () => {
  return (
    <Section className="border-b-[1px] border-main">
      <Container className="flex-col mt-14 mb-[136px]">
        <h2 className="text-h3 mb-4">Результаты поиска</h2>
        <div className="flex flex-col gap-6">
          <div className="text-body2">
            Мы не нашли ничего по запросу:
            <span className="text-h5"> Какой то запрос</span>
          </div>
          <div className="text-body2">
            По вашему запросу ничего не найдено. Обратите внимание на новые
            подборки и рекомендации или посмотрите разделы с брендами и
            категориями, которые вам интересны.
          </div>
          <ul className="grid grid-cols-4 grid-rows-[552px] gap-x-6">
            {/* <li>
              <FashionCard
                title="Спорт шик"
                href="/"
                src="/images/Home/Fashion/fashion-1.jpg"
              />
            </li>
            <li>
              <FashionCard
                title="Спорт шик"
                href="/"
                src="/images/Home/Fashion/fashion-1.jpg"
              />
            </li>
            <li>
              <FashionCard
                title="Спорт шик"
                href="/"
                src="/images/Home/Fashion/fashion-1.jpg"
              />
            </li>
            <li>
              <FashionCard
                title="Спорт шик"
                href="/"
                src="/images/Home/Fashion/fashion-1.jpg"
              />
            </li> */}
          </ul>
        </div>
      </Container>
    </Section>
  );
};

export default Result;
