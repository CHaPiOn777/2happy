import { Button } from "@/shared/components/UI/Button";
import Link from "next/link";
import { paths } from "@/config/paths";
import { Dispatch, SetStateAction } from "react";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";
import { useUser } from "@/shared/api/authApi";
import AuthModal from "@/features/Auth/components/AuthModal";
import FavoriteSheetCard from "./Cards/FavoriteSheetCard";
import { FavoriteProduct } from "../types";

const FavoriteSheetContent = ({
  favorites,
  setOpen,
}: {
  favorites: FavoriteProduct[];
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { data: user } = useUser();

  const isTablet = useMediaCustom("lg");

  return (
    <div className="flex flex-col justify-between gap-6 w-full h-full flex-1 overflow-hidden">
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex flex-col gap-4 lg:gap-6 overflow-scroll max-h-[532px]">
          {favorites?.map((favorite) => (
            <FavoriteSheetCard key={favorite.id} favorite={favorite} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {!user && (
          <div className="text-h5 text-center">
            Войдите или создайте аккаунт, чтобы эти товары сохранились в вашем
            избранном
          </div>
        )}

        <div className="flex flex-col gap-4">
          {!user && (
            <AuthModal defaultTab="login" triggerProps={{ asChild: true }}>
              <Button className="w-full" size={isTablet ? "medium" : "large"}>
                Войти
              </Button>
            </AuthModal>
          )}
          <Button
            className="w-full"
            variant="secondary"
            size={isTablet ? "medium" : "large"}
            onClick={() => {
              setOpen(false);
            }}
            asChild
          >
            <Link href={paths.favorite.getHref()}>Перейти в избранное</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteSheetContent;
