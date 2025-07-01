import AuthModal from "@/features/Auth/components/AuthModal";
import { Button, ButtonProps } from "@/shared/components/UI/Button";
import { useNavigateCheckout } from "../hooks/useNavigateCheckout";
import { useUser } from "@/shared/api/authApi";
import Link from "next/link";
import { CartResponse } from "../types";
import { useRouter } from "next/navigation";
import { cn } from "@/shared/utils";
import { paths } from "@/config/paths";

const NavigateToCartButton = ({
  className,
  cartData,
  buttonProps,
}: {
  className?: string;
  cartData: CartResponse;
  buttonProps?: ButtonProps & { text?: string };
}) => {
  const { data: user } = useUser();

  const router = useRouter();

  const buttonDisabled = buttonProps?.disabled;

  const { link, handleClick } = useNavigateCheckout({
    cartData,
    disabled: buttonDisabled,
  });

  return (
    <>
      {user ? (
        <Link
          onClick={handleClick}
          href={link}
          className={cn(buttonDisabled && "pointer-events-none", className)}
        >
          <Button
            variant="primary"
            size="medium"
            className="w-full"
            disabled={buttonDisabled}
            {...buttonProps}
          >
            {buttonProps?.text ? buttonProps.text : "Перейти к оплате"}
          </Button>
        </Link>
      ) : (
        <AuthModal
          triggerProps={{
            asChild: true,
            disabled: !!user || buttonDisabled,
            className,
          }}
          onSuccess={() => {
            handleClick();
            router.push(link);
          }}
          buttonSlot={
            <Button
              className="w-full"
              asChild
              {...buttonProps}
              variant="secondary"
              size="normal"
            >
              <Link onClick={handleClick} href={link}>
                Продолжить как гость
              </Link>
            </Button>
          }
          callbackUrl={paths.checkout.getHref()}
        >
          <Button
            variant="primary"
            size="medium"
            className="w-full"
            disabled={buttonDisabled}
            {...buttonProps}
            onClick={() => {}}
          >
            {buttonProps?.text ? buttonProps.text : "Перейти к оплате"}
          </Button>
        </AuthModal>
      )}
    </>
  );
};

export default NavigateToCartButton;
