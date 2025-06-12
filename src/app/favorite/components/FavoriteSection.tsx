import AuthModal from "@/features/Auth/components/AuthModal";
import AuthorizedView from "@/features/Auth/components/AuthorizedView";
import FavoriteCard from "@/features/Favorite/components/Cards/FavoriteCard";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";

const FavoriteSection = () => {
  return (
    <Section className="border-b border-main">
      <Container className="flex-col gap-12 lg:gap-16 my-20 lg:my-section">
        <div className="flex flex-col gap-4">
          <h2 className="text-h2">Избранное /</h2>
          <div className="text-gray-middle">Всего товаров: 8</div>
        </div>
        <div className="flex flex-col gap-12">
          <AuthorizedView condition={false}>
            <div className="flex flex-col gap-6">
              <div className="text-body1">
                Войдите или создайте аккаунт, чтобы эти товары сохранились
                в вашем вишлисте.
              </div>
              <AuthModal defaultTab="login" triggerProps={{ asChild: true }}>
                <Button size="medium">
                  Войти <ArrowUpRightIcon />
                </Button>
              </AuthModal>
            </div>
          </AuthorizedView>

          <div>
            <FavoriteCard />
            <FavoriteCard />
            <FavoriteCard />
            <FavoriteCard />
          </div>
          <div className="flex gap-6 justify-end">
            <Button variant="secondary">Очистить избраное</Button>
            <Button>Добавить в корзину</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FavoriteSection;
