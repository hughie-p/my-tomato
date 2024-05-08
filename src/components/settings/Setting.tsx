"use client";

import { iDb } from "@/lib/index-db";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useEffect, useState } from "react";
import { INITIAL_SETTINGS } from "./Setting.constants";

export default function Settings() {
  const handleOpenDb = async () => {
    const sucess = await iDb.openDb();
    console.log(sucess);
  };

  const [settings, setSettings] = useState();

  useEffect(() => {
    const initSettings = async () => {
      const db = await iDb.openDb();
      await Promise.all(
        Object.entries(INITIAL_SETTINGS).map(
          async ([key, value]) =>
            await iDb.addNewData(db, "settings", value, key)
        )
      );
    };

    const fetchSettings = async () => {
      const db = await iDb.openDb();
      const data = await iDb.getAllData(db, "settings");
      setSettings(data as any);
    };

    initSettings();
    fetchSettings();
  }, []);

  console.log({ settings });

  return (
    <Dialog>
      <DialogTrigger>Settings</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>{JSON.stringify(settings)}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
