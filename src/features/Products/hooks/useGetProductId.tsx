"use client";

import { useParams } from "next/navigation";

export const parseProductId = (input: string): { slug: string; id: number } => {
  const [slug, id] = input.split("_");

  if (!slug || !id || isNaN(Number(id)))
    throw new Error("Неправильный [productId]");
  return { slug, id: Number(id) };
};

export const useGetProductId = (name: string) => {
  const params = useParams();

  const raw = params[name];

  if (typeof raw !== "string") {
    throw new Error(
      `Ожидался string в параметре "${name}", но получено: ${typeof raw}`
    );
  }

  return parseProductId(raw);
};
