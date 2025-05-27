import { Image } from "./api";

export type TSort = {
  type: string;
  field: string;
};

export type CheckoutItem = {
  id: number;
  parentId: number;
  name: string;
  size: string;
  color: string;
  image: Omit<
    Image,
    "date_created" | "date_created_gmt" | "date_modified" | "date_modified_gmt"
  > | null;
  quantity: number;
  regularPrice: string;
  price: string;
  salePrice: string;
  sumPrice: string;
  currencySymbol: string;
};

export type WPMediaResponse = {
  id: number;
  date: string;
  slug: string;
  type: "attachment";
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  caption: {
    rendered: string;
  };
  alt_text: string;
  media_type: "image" | "file" | "video" | "audio";
  mime_type: string;
  media_details: {
    width?: number;
    height?: number;
    file: string;
    sizes?: {
      [key: string]: {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
      };
    };
    image_meta?: {
      aperture: string;
      credit: string;
      camera: string;
      caption: string;
      created_timestamp: string;
      copyright: string;
      focal_length: string;
      iso: string;
      shutter_speed: string;
      title: string;
      orientation: string;
      keywords: string[];
    };
  };
  source_url: string;
};
