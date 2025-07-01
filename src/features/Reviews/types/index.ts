import { Image } from "@/shared/types/api";

export type WPComment = {
  id: number;
  post: number; // ID поста, к которому прикреплён комментарий
  parent: number; // ID родительского комментария (0, если корневой)
  author: number; // ID пользователя, если автор зарегистрирован
  author_name: string; // Имя автора (для гостей)
  author_email: string; // Email автора (для гостей, скрыт по умолчанию)
  author_url: string;
  date: string; // Дата создания (в формате ISO)
  date_gmt: string;
  content: {
    rendered: string; // HTML-контент комментария
    protected: boolean;
  };
  link: string; // Ссылка на комментарий
  status: string; // "approved" или другой статус
  type: string; // Обычно "comment"
  author_avatar_urls: {
    [size: string]: string;
  };
  meta: {
    city: "";
    country: "";
    images: Image[];
  }; // Дополнительные метаданные, если есть
};
