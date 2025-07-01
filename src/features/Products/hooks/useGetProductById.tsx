"use client";

import { useEffect } from "react";
import { getProductByIdQueryOptions } from "../api/productsApi";
import { useQuery } from "@tanstack/react-query";
import { ProductServer } from "../types";

export const useGetProductById = (
  id: number,
  onSuccess?: (data: ProductServer) => void
) => {
  const { data, isSuccess, ...otherProps } = useQuery({
    ...getProductByIdQueryOptions(id),
    enabled: true,
  });

  useEffect(() => {
    if (isSuccess && onSuccess) onSuccess(data);
  }, [isSuccess]);

  return { data, ...otherProps };
};
