import { paths } from "@/config/paths";
import AuthModal from "@/features/Auth/components/AuthModal";
import AuthorizedView from "@/features/Auth/components/AuthorizedView";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import Section from "@/shared/components/UI/Section";
import Link from "next/link";

const LoginSuggest = () => {
  return (
    <Section>
      <Container className="my-section justify-between gap-6">
        <AuthorizedView condition={true}>
          <div className="w-full lg:max-w-[336px] space-y-12">
            <div className="space-y-6">
              <h4 className="text-h4">Спасибо, что вы с нами!</h4>
              <p>
                В личном кабинете вы сможете: <br />
                Просматривать историю покупок <br />
                Управлять адресами и данными
              </p>
            </div>

            <Button className="w-full" size="medium" asChild>
              <Link href={paths.account.getHref()}>Перейти в кабинет</Link>
            </Button>
          </div>
        </AuthorizedView>

        <AuthorizedView condition={false}>
          <div className="w-full lg:max-w-[624px] space-y-12">
            <div className="space-y-6">
              <h4 className="text-h4">
                Управляйте своими покупками — создайте аккаунт или войдите!
              </h4>
              <p className="text-gray-dark flex flex-col gap-2">
                <span>
                  Зарегистрируйтесь и получите доступ к персональному кабинету,
                  где вы сможете:
                </span>
                <span>Просматривать историю покупок</span>
                <span>
                  Легко оформлять новые заказы без повторного ввода данных
                </span>
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4">
              <AuthModal triggerProps={{ asChild: true }}>
                <Button className="w-full" size="medium">
                  Создать аккаунт
                </Button>
              </AuthModal>
              <AuthModal triggerProps={{ asChild: true }}>
                <Button className="w-full" size="medium" variant="secondary">
                  Войти
                </Button>
              </AuthModal>
            </div>
          </div>
        </AuthorizedView>
        <div className="relative flex items-center justify-center w-full max-w-[705px] h-full bg-gradient-7">
          <div className="absolute w-full h-full bg-checkout-login-suggest-gradient z-10"></div>
          <ImageWithLoader
            wrapperClassName="absolute top-0 left-0"
            className="object-center object-[50%_8%]"
            src="/images/Success-checkout/thanks.jpg"
            alt="login-suggest"
          />
          <Button
            className="z-10 bg-white"
            variant="secondary"
            size="medium"
            asChild
          >
            <Link href={paths.catalog.getHref()}>Продолжить покупки</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default LoginSuggest;
