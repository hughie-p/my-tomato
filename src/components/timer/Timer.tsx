"use client";

import { useTimer } from "@/hooks/use-timer";
import { Button } from "../ui/button";
import { useRef } from "react";

export default function Timer() {
  const startTime = useRef(new Date().getTime());

  const { time } = useTimer(
    startTime.current,
    startTime.current + 25 * 60 * 1000
  );

  return (
    <>
      <title>{formatTime(time)}</title>
      <div>
        <ul>
          <li>
            <Button>Pomodoro</Button>
          </li>
          <li>
            <Button>Short Break</Button>
          </li>
          <li>
            <Button>Long Break</Button>
          </li>
        </ul>
        <div>{formatTime(time)}</div>
        <Button>Start</Button>
      </div>
    </>
  );
}

function formatTime(timeInMs: number) {
  const minutes = Math.floor(timeInMs / 1000 / 60);
  const seconds = Math.floor((timeInMs / 1000) % 60);

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}
