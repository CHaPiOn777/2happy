import {
  Image,
  ProductTag,
  ProductVariationAttribute,
  StockStatus,
} from "@/shared/types/api";

export interface FavoriteResponse {
  data: FavoriteProduct[];
  totalCount: number;
}

export interface FavoriteProduct {
  id: number;
  name: string;
  on_sale: boolean;
  parent_id: number;
  variationId: number;
  attributes: ProductVariationAttribute[];
  stock_status: StockStatus;
  stock_quantity: number | null;
  tags: ProductTag[];
  price: string;
  regular_price: string;
  sale_price: string;
  quantity: number;
  image: Image | null;
}

export interface FavoriteProductNew {
  id: number;
  favorite_id: string;
  product_id: boolean;
  productData: FavoriteProductData;
  created_at: string;
}

export interface FavoriteProductData {
  parent_id: number;
  name: string;
  on_sale: boolean;
  attributes: ProductVariationAttribute[];
  stock_status: StockStatus;
  stock_quantity: number | null;
  tags: ProductTag[];
  price: string;
  regular_price: string;
  sale_price: string;
  quantity: number;
  image: Image | null;
}
