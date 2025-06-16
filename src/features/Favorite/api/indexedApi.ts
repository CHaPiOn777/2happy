import {
  Image,
  ProductTag,
  ProductVariationAttribute,
  StockStatus,
} from "@/shared/types/api";

export interface FavoriteProduct {
  id: number;
  name: string;
  on_sale: boolean;
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

export const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("FavoritesDB", 1);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains("favorites")) {
        db.createObjectStore("favorites", { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const addToFavorites = async (item: FavoriteProduct): Promise<void> => {
  const db = await openDB();
  const tx = db.transaction("favorites", "readwrite");
  const store = tx.objectStore("favorites");
  store.put(item);

  return new Promise<void>((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
};

export const removeFromFavorites = async (
  id: string | number
): Promise<void> => {
  const db = await openDB();
  const tx = db.transaction("favorites", "readwrite");
  const store = tx.objectStore("favorites");
  store.delete(id);

  return new Promise<void>((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
};

export const getAllFavorites = async (): Promise<FavoriteProduct[] | null> => {
  const db = await openDB();
  const tx = db.transaction("favorites", "readonly");
  const store = tx.objectStore("favorites");

  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = () =>
      resolve(
        request.result.length === 0
          ? null
          : (request.result as FavoriteProduct[])
      );
    request.onerror = () => reject(request.error);
  });
};

export const getIsFavorite = async (id: string | number): Promise<boolean> => {
  const db = await openDB();
  const tx = db.transaction("favorites", "readonly");
  const store = tx.objectStore("favorites");

  return new Promise((resolve, reject) => {
    const request = store.get(id);
    request.onsuccess = () => resolve(!!request.result);
    request.onerror = () => reject(request.error);
  });
};

export const clearFavorites = async (): Promise<void> => {
  const db = await openDB();
  const tx = db.transaction("favorites", "readwrite");
  const store = tx.objectStore("favorites");
  store.clear();

  return new Promise<void>((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
};
