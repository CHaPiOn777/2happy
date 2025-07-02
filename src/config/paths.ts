import { createURLWithParams } from "@/shared/utils/createURLWithParams";

const buildQuery = (params: Record<string, string | number | undefined>) => {
  const queryParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      queryParams.set(key, String(value));
    }
  }
  return queryParams.toString() ? `?${queryParams.toString()}` : "";
};

export const paths = {
  home: {
    getHref: (params?: Record<string, unknown>) => {
      const homeUrl = `/`;

      return createURLWithParams(homeUrl, params);
    },
  },

  resetPassword: {
    getHref: (params?: Record<string, unknown>) => {
      const resetPasswordUrl = `/reset-password`;

      return createURLWithParams(resetPasswordUrl, params);
    },
  },

  catalog: {
    getHref: () => "/catalog",

    category: {
      getHref: (id: number, slug: string, name: string, subTo?: number) => {
        const query = buildQuery({ name, subTo });
        return `${paths.catalog.getHref()}/${slug}_${id}${query}`;
      },
    },

    collections: {
      getHref: (name?: string) => {
        const query = buildQuery({ name });
        return `${paths.catalog.getHref()}/collections${query}`;
      },

      category: {
        getHref: (id: number, slug: string, name: string, subTo?: number) => {
          const query = buildQuery({ name, subTo });
          return `${paths.catalog.collections.getHref()}/${slug}_${id}${query}`;
        },
      },
    },

    new_collection: {
      getHref: (name?: string) => {
        const query = buildQuery({ name });
        return `${paths.catalog.getHref()}/new-collection${query}`;
      },

      category: {
        getHref: (id: number, slug: string, name: string, subTo?: number) => {
          const query = buildQuery({ name, subTo });
          return `${paths.catalog.new_collection.getHref()}/${slug}_${id}${query}`;
        },
      },
    },

    bestsellers: {
      getHref: () =>
        `${paths.catalog.getHref()}/bestsellers?name=Наши Бестселлеры`,
    },
    final_sale: {
      getHref: () => `${paths.catalog.getHref()}/final-sale?name=Final Sale`,
    },
  },

  favorite: {
    getHref: () => "/favorite",
  },

  product: {
    getHref: (id: number, slug: string, params?: Record<string, unknown>) => {
      const decodedSlug = decodeURIComponent(slug);
      const productUrl = `/product/${encodeURIComponent(decodedSlug)}_${id}`;

      return createURLWithParams(productUrl, params);
    },
  },

  collection: {
    getHref: (id: number, slug: string, params?: Record<string, unknown>) => {
      const decodedSlug = decodeURIComponent(slug);
      const productUrl = `/collection/${encodeURIComponent(decodedSlug)}_${id}`;

      return createURLWithParams(productUrl, params);
    },
  },

  cart: {
    getHref: () => "/cart",
  },

  contacts: {
    getHref: () => "/contacts",
  },

  offert: {
    getHref: () => "/offert",
  },

  policy: {
    getHref: () => "/policy",
  },

  about: {
    getHref: () => "/about",
    partnership: {
      getHref: () => `${paths.about.getHref()}/partnership`,
    },
    reviews: {
      getHref: () => `${paths.about.getHref()}/reviews`,
    },
  },

  checkout: {
    getHref: () => "/checkout",
  },

  successCheckout: {
    getHref: (id: number) => `/success-checkout/${id}`,
  },

  help: {
    getHref: (params?: Record<string, unknown>) => {
      const helpUrl = `/help/`;

      return createURLWithParams(helpUrl, params);
    },
  },

  account: {
    getHref: (params?: Record<string, unknown>) => {
      const accountUrl = `/account/`;

      return createURLWithParams(accountUrl, params);
    },
  },

  search: {
    getHref: (search: string) => `/search${buildQuery({ search })}`,
  },
} as const;
