"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTimerWorker } from "./use-timer-worker";

export function useTimer(timeCount: number, onComplete?: () => void) {
  const [time, setTime] = useState(timeCount);
  const callbackRef = useRef(onComplete);
  const timerWorker = useTimerWorker();

  useEffect(() => {
    setTime(timeCount);
  }, [timeCount]);

  const startTimer = () => {
    timerWorker.current?.postMessage({ type: "start", timeCount });
  };

  const pauseTimer = () => {
    timerWorker.current?.postMessage({ type: "pause" });
  };

  useLayoutEffect(() => {
    callbackRef.current = onComplete;
  });

  useEffect(() => {
    const worker = timerWorker.current;
    if (!worker) return;

    const onMessage = (e: MessageEvent) => {
      setTime(e.data);
      if (e.data === 0) {
        callbackRef.current?.();
      }
    };

    worker.addEventListener("message", onMessage);

    return () => {
      worker.removeEventListener("message", onMessage);
    };
  }, [timerWorker]);

  return { time, startTimer, pauseTimer };
}
