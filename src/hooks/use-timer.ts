"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const timerWoker =
  typeof window !== "undefined"
    ? new window.Worker(new URL("../workers/timer-worker", import.meta.url), {
        type: "module",
      })
    : null;

export function useTimer(timeCount: number, onComplete?: () => void) {
  const [time, setTime] = useState(timeCount);
  const callbackRef = useRef(onComplete);

  useEffect(() => {
    setTime(timeCount);
  }, [timeCount]);

  const startTimer = () => {
    if (!window.Worker) {
      throw new Error("Web Workers are not supported in this environment");
    }

    timerWoker!.postMessage({ type: "start", timeCount });
  };

  const pauseTimer = () => {
    timerWoker!.postMessage({ type: "pause" });
  };

  useLayoutEffect(() => {
    callbackRef.current = onComplete;
  });

  useEffect(() => {
    if (!timerWoker) return;

    const onMessage = (e: MessageEvent) => {
      setTime(e.data);
      if (e.data === 0) {
        callbackRef.current?.();
      }
    };

    timerWoker.addEventListener("message", onMessage);

    return () => {
      timerWoker.removeEventListener("message", onMessage);
    };
  }, []);

  return { time, startTimer, pauseTimer };
}
