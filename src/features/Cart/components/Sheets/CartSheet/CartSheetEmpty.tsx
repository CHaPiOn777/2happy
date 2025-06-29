import { paths } from "@/config/paths";
import AuthModal from "@/features/Auth/components/AuthModal";
import { useUser } from "@/shared/api/authApi";
import { Button } from "@/shared/components/UI/Button";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

const CartSheetEmpty = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { data } = useUser();

  const isTablet = useMediaCustom("lg");
  return (
    <div className="flex flex-col gap-10 items-center justify-center w-full h-full">
      <p className="text-h5 text-gray-dark text-center">
        Вы пока ничего не добавили в корзину
      </p>
      <div className="flex flex-col gap-4 w-full max-w-[320px]">
        <Button
          variant="secondary"
          size={isTablet ? "medium" : "large"}
          className="w-full"
          onClick={() => {
            setOpen(false);
          }}
          asChild
        >
          <Link href={paths.catalog.getHref()}>Продолжить покупки</Link>
        </Button>
        {!data && (
          <AuthModal triggerProps={{ asChild: true }}>
            <Button
              variant="tertiary"
              size={isTablet ? "medium" : "large"}
              className="w-full"
            >
              Войти
            </Button>
          </AuthModal>
        )}
      </div>
    </div>
  );
};

export default CartSheetEmpty;
