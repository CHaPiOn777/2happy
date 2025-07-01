"use client";

import AuthModal from "@/features/Auth/components/AuthModal";
import AuthorizedView from "@/features/Auth/components/AuthorizedView";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import FavoriteList from "./FavoriteList";
import { useGetAllFavorite } from "@/features/Favorite/api/favoriteQueries";
import { useMemo } from "react";
import FavoriteEmpty from "./FavoriteEmpty";
import FavoriteSectionButtons from "./FavoriteSectionButtons";
import FavoriteCardLoader from "@/features/Favorite/components/Cards/FavoriteCard/FavoriteCardLoader";

import { motion } from "motion/react";

const FavoriteSection = () => {
  const { data: favorites, isLoading } = useGetAllFavorite();

  const favoriteCount = useMemo(
    () => favorites?.data.reduce((acc, item) => (acc += item.quantity), 0),
    [favorites]
  );

  return (
    <Section className="sm:border-b border-main">
      <Container className="flex-col gap-8 sm:gap-12 lg:gap-16 my-section md:my-20 lg:my-section">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-h2">Избранное /</h2>
          {!!favoriteCount && (
            <div className="text-gray-middle">
              Всего товаров: {favoriteCount}
            </div>
          )}
        </motion.div>
        <div className="flex flex-col gap-12">
          {!!favoriteCount && (
            <AuthorizedView condition={false}>
              <div className="flex flex-col gap-6">
                <div className="text-body1">
                  Войдите или создайте аккаунт, чтобы эти товары сохранились
                  в вашем вишлисте.
                </div>
                <AuthModal defaultTab="login" triggerProps={{ asChild: true }}>
                  <Button size="medium" className="w-full sm:w-min">
                    Войти <ArrowUpRightIcon />
                  </Button>
                </AuthModal>
              </div>
            </AuthorizedView>
          )}

          {isLoading && (
            <>
              <FavoriteCardLoader />
              <FavoriteCardLoader />
              <FavoriteCardLoader />
            </>
          )}
          {!isLoading && favorites?.data.length ? (
            <div className="flex gap-6 sm:gap-8 md:gap-12 flex-col">
              <FavoriteList favorites={favorites.data} />
              <FavoriteSectionButtons favorites={favorites.data} />
            </div>
          ) : null}
          {!isLoading && !favorites?.data.length ? <FavoriteEmpty /> : null}
        </div>
      </Container>
    </Section>
  );
};

export default FavoriteSection;
