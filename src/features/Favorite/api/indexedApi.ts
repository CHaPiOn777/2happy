import { FavoriteProduct, FavoriteResponse } from "../types";

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

export type UpdateFavoriteByIdParams = {
  id: number;
  data: Partial<FavoriteProduct>;
};

export const updateFavoriteById = async (
  { id, data }: UpdateFavoriteByIdParams,
  signal?: AbortSignal
): Promise<void> => {
  const db = await openDB();
  const tx = db.transaction("favorites", "readwrite");
  const store = tx.objectStore("favorites");

  const getRequest = store.get(id);

  return new Promise<void>((resolve, reject) => {
    getRequest.onsuccess = () => {
      const item = getRequest.result as FavoriteProduct | undefined;

      if (!item) {
        reject(new Error(`Favorite item with id ${id} not found.`));
        return;
      }

      const updatedItem: FavoriteProduct = {
        ...item,
        ...data,
      };

      const putRequest = store.put(updatedItem);

      putRequest.onsuccess = () => resolve();
      putRequest.onerror = () => reject(putRequest.error);
    };

    getRequest.onerror = () => reject(getRequest.error);
  });
};

export const getAllFavorites = async (): Promise<FavoriteResponse> => {
  const db = await openDB();
  const tx = db.transaction("favorites", "readonly");
  const store = tx.objectStore("favorites");

  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = () => {
      const result = request.result as FavoriteProduct[];
      const totalCount = result.reduce(
        (acc, item) => (acc += item.quantity),
        0
      );
      resolve({
        data: result,
        totalCount,
      });
    };
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
