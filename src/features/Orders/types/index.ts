import { WoocommerceAddress } from "@/shared/types/api";

export type OrderResponse = {
  id: number;
  parent_id: number;
  number: string;
  order_key: string;
  created_via: string;
  version: string;
  status: string;
  currency: string;
  currency_symbol: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  discount_total: string;
  discount_tax: string;
  shipping_total: string;
  shipping_tax: string;
  cart_tax: string;
  total: string;
  total_tax: string;
  prices_include_tax: boolean;
  customer_id: number;
  customer_ip_address: string;
  customer_user_agent: string;
  customer_note: string;
  billing: WoocommerceAddress;
  shipping: WoocommerceAddress;
  payment_method: string;
  payment_method_title: string;
  transaction_id: string;
  date_paid: string | null;
  date_paid_gmt: string | null;
  date_completed: string | null;
  date_completed_gmt: string | null;
  cart_hash: string;
  meta_data: MetaData[];
  line_items: OrderProductItem[];
  tax_lines: TaxLine[];
  shipping_lines: ShippingLine[];
};

export type CreateOrderPayload = {
  customer_id: number | undefined;
  billing: {
    first_name: string;
    last_name: string;
    address_1: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    email: string;
    phone: string;
  };
  shipping: {
    first_name: string;
    last_name: string;
    address_1: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
  line_items: {
    product_id: number;
    quantity: number;
  }[];
  payment_method: string;
  payment_method_title: string;
  set_paid: boolean;
};

export type RefundOrderPayload = {
  amount: string;
  reason: string;
  api_refund: boolean;
  line_items: { id: number; quantity: number }[];
};

type MetaData = {
  id: number;
  key: string;
  value: unknown;
  display_key: string;
  display_value: string;
};

export type OrderProductItem = {
  id: number;
  name: string;
  product_id: number;
  variation_id: number;
  quantity: number;
  tax_class: string;
  subtotal: string;
  image: {
    id: number;
    src: string;
  };
  subtotal_tax: string;
  total: string;
  total_tax: string;
  taxes: Tax[];
  meta_data: MetaData[];
  sku: string;
  price: number;
};

type Tax = {
  id: number;
  total: string;
  subtotal: string;
};

type TaxLine = {
  id: number;
  rate_code: string;
  rate_id: number;
  label: string;
  compound: boolean;
  tax_total: string;
  shipping_tax_total: string;
  meta_data: MetaData[];
};

type ShippingLine = {
  id: number;
  method_title: string;
  method_id: string;
  total: string;
  total_tax: string;
  taxes: Tax[];
  meta_data: MetaData[];
};
