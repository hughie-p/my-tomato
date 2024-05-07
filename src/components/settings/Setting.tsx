"use client";

import { localDb } from "@/lib/index-db";

export default function Settings() {
  const handleOpenDb = async () => {
    const sucess = await localDb.openDB();
    console.log(sucess);
  };

  return <button onClick={handleOpenDb}>Open</button>;
}
