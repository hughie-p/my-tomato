const DB_NAME = "tomato";
const DB_VERSION = 1;

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };

    request.onupgradeneeded = () => {
      const db = request.result;
      db.createObjectStore("settings", { keyPath: "id" });
      resolve(db);
    };
  });
}

export const localDb = {
  openDB,
};
