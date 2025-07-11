"use client";

import { useCart } from "@/features/Cart/api/cartQueries";
import CartCard, {
  CartDefaultCardLoader,
} from "@/features/Cart/components/Cards/CartDefaultCard/CartDefaultCard";
import Container from "@/shared/components/UI/Container";
import CartInfo from "./CartInfo";
import { getWordForm } from "@/shared/utils/getWordForm";
import CartButtons from "./CartButtons";
import { cn } from "@/shared/utils/cn";

import { motion } from "motion/react";

const CartList = () => {
  const { data, isPending } = useCart();
  return (
    <Container
      className={cn("my-section flex-col gap-6 md:gap-12", isPending && "mb-8")}
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex gap-2 items-end"
      >
        <h1 className="text-h2">Корзина /</h1>
        <span className="text-body2 text-gray-middle md:mb-1">
          {data?.items_count ?? 0}{" "}
          {getWordForm(data?.items_count ?? 0, {
            one: "товар",
            several: "товара",
            many: "товаров",
          })}
        </span>
      </motion.div>
      <div className="flex flex-col">
        <div className="grid grid-cols-[520px_1fr] gap-x-12 pb-3 lg:py-3 text-body2 text-gray-middle border-b border-gray">
          <div className="hidden lg:block">Товар</div>
          <div className="justify-items-center items-center grid-cols-cartCard justify-between hidden lg:grid">
            <div>Цена</div>
            <div>Количество</div>
            <div>Сумма</div>
          </div>
        </div>
        <div className="flex flex-col">
          {isPending && (
            <>
              <CartDefaultCardLoader />
              <CartDefaultCardLoader />
            </>
          )}
          {!isPending && !!data?.items_count ? (
            <>
              {data?.items.map((item) => (
                <CartCard
                  key={item.key}
                  cartItem={item}
                  renderButtons={(cartItem) => (
                    <CartButtons cartItem={cartItem} />
                  )}
                />
              ))}
            </>
          ) : null}
          {!isPending && !data?.items_count ? (
            <h2 className="text-h2 my-12 text-center">Ваша корзина пуста</h2>
          ) : null}
        </div>
      </div>
      {data && <CartInfo cartData={data} />}
    </Container>
  );
};

export default CartList;
