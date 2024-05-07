import { useEffect, useRef } from "react";

export function useTimerWorker() {
  const timerWoker = useRef<Worker | null>(null);

  useEffect(() => {
    timerWoker.current = new Worker(
      new URL("../workers/timer-worker", import.meta.url),
      {
        type: "module",
      }
    );
  }, []);

  return timerWoker;
}
