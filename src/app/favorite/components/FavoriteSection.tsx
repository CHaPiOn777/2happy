"use client";

import AuthModal from "@/features/Auth/components/AuthModal";
import AuthorizedView from "@/features/Auth/components/AuthorizedView";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import FavoriteList from "./FavoriteList";
import { useGetAllFavorite } from "@/features/Favorite/api/favoriteApi";
import { useMemo } from "react";
import { FavoriteCardLoader } from "@/features/Favorite/components/Cards/FavoriteCard";
import FavoriteEmpty from "./FavoriteEmpty";
import FavoriteSectionButtons from "./FavoriteSectionButtons";

const FavoriteSection = () => {
  const { data: favorites, isLoading } = useGetAllFavorite();

  // const favoriteCount = useMemo(
  //   () => favorites?.reduce((acc, item) => (acc += item.quantity), 0),
  //   [favorites]
  // );

  return (
    <Section className="border-b border-main">
      <Container className="flex-col gap-12 lg:gap-16 my-20 lg:my-section">
        <div className="flex flex-col gap-4">
          <h2 className="text-h2">Избранное /</h2>
          {!!favorites?.totalCount && (
            <div className="text-gray-middle">
              Всего товаров: {favorites?.totalCount}
            </div>
          )}
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

          {isLoading && (
            <>
              <FavoriteCardLoader />
              <FavoriteCardLoader />
              <FavoriteCardLoader />
            </>
          )}
          {!isLoading && favorites?.data.length ? (
            <>
              <FavoriteList favorites={favorites.data} />
              <FavoriteSectionButtons favorites={favorites.data} />
            </>
          ) : null}
          {!isLoading && !favorites?.data.length ? <FavoriteEmpty /> : null}
        </div>
      </Container>
    </Section>
  );
};

export default FavoriteSection;
