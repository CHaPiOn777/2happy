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
      <Container className="my-section justify-between">
        <div className="w-full max-w-[336px] space-y-12">
          <div className="space-y-6">
            <h4 className="text-h4">Спасибо, что вы с нами!</h4>
            <p>
              В личном кабинете вы сможете: <br />
              Просматривать историю покупок <br />
              Управлять адресами и данными
            </p>
          </div>
          <AuthorizedView condition={true}>
            <Button className="w-full" size="medium" asChild>
              <Link href={paths.account.getHref()}>Перейти в кабинет</Link>
            </Button>
          </AuthorizedView>
          <AuthorizedView condition={false}>
            <AuthModal triggerProps={{ asChild: true }}>
              <Button className="w-full" size="medium">
                Перейти в кабинет
              </Button>
            </AuthModal>
          </AuthorizedView>
        </div>
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
