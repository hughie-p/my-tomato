"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const timerWoker =
  typeof window !== "undefined"
    ? new window.Worker(
        new URL("../workers/timer-worker.js", import.meta.url),
        { type: "module" }
      )
    : null;

export function useTimer(
  startTime: number,
  endTime: number,
  onComplete?: () => void
) {
  const [time, setTime] = useState(endTime - startTime);
  const callbackRef = useRef(onComplete);

  useLayoutEffect(() => {
    callbackRef.current = onComplete;
  });

  useEffect(() => {
    if (!timerWoker) {
      return;
    }

    const onMessage = (e: MessageEvent) => {
      setTime(endTime - e.data);
    };

    timerWoker.postMessage({ startTime, endTime });
    timerWoker.addEventListener("message", onMessage);

    return () => {
      timerWoker.removeEventListener("message", onMessage);
    };
  }, [endTime, startTime]);

  return { time };
}
