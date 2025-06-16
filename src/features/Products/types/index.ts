import {
  Image,
  Links,
  ProductAttribute,
  ProductCategory,
  ProductTag,
  ProductVariationAttribute,
  StockStatus,
} from "@/shared/types/api";

export interface Product {
  id: string;
  title: string;
  colors: {
    id: number;
    hex: string;
  }[];
  sizes: {
    id: number;
    size: string;
  }[];
  price: number;
  sale?: {
    price: number;
    amount: number;
  };
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

type MetaProductFeatures = {
  id: number;
  key: "_product_features";
  value: string;
};

type MetaModelParameters = {
  id: number;
  key: "_model_parameters";
  value: string;
};

type MetaCompositionAndCare = {
  id: number;
  key: "_composition_and_care";
  value: string;
};

export type ProductMeta = [
  MetaProductFeatures,
  MetaModelParameters,
  MetaCompositionAndCare
];

type Dimensions = {
  length: string;
  width: string;
  height: string;
};

export type ProductVariation = {
  id: number;
  parent_id: number;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  stock_status: StockStatus;
  stock_quantity: number | null;
  purchasable: boolean;
  weight: string;
  image: Image | null;
  attributes: ProductVariationAttribute[];
  dimensions: Dimensions;
  meta_data: unknown[];
  permalink: string;
  name: string;
  date_created: string;
  date_modified: string;
  woo_variation_gallery_images: Image[];
  _links: Links;
};

export type ProductServer = {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  type: string;
  status: string;
  featured: boolean;
  catalog_visibility: string;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  date_on_sale_from: string | null;
  date_on_sale_from_gmt: string | null;
  date_on_sale_to: string | null;
  date_on_sale_to_gmt: string | null;
  price_html: string;
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  virtual: boolean;
  downloadable: boolean;
  downloads: unknown[];
  download_limit: number;
  download_expiry: number;
  external_url: string;
  button_text: string;
  tax_status: string;
  tax_class: string;
  manage_stock: boolean;
  stock_quantity: number | null;
  stock_status: StockStatus;
  backorders: string;
  backorders_allowed: boolean;
  backordered: boolean;
  sold_individually: boolean;
  weight: string;
  dimensions: Dimensions;
  shipping_required: boolean;
  shipping_taxable: boolean;
  shipping_class: string;
  shipping_class_id: number;
  reviews_allowed: boolean;
  average_rating: string;
  rating_count: number;
  related_ids: number[];
  upsell_ids: number[];
  cross_sell_ids: number[];
  parent_id: number;
  purchase_note: string;
  categories: ProductCategory[];
  tags: ProductTag[];
  images: Image[];
  attributes: ProductAttribute[];
  default_attributes: unknown[];
  variations: unknown[];
  grouped_products: number[];
  menu_order: number;
  meta_data: ProductMeta;
  _links: Links;
};

export type TProductGrid = "big" | "small";

export interface Color {
  id: number;
  hex: string;
}
