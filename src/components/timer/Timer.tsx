"use client";

import { useState } from "react";
import { useTimer } from "@/hooks/use-timer";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { formatTime } from "./Timer.helpers";

enum TimerMode {
  Pomodoro,
  ShortBreak,
  LongBreak,
}

const TimerModeKeys = Object.keys(TimerMode)
  .filter((k) => !isNaN(Number(k)))
  .map(Number) as unknown[] as TimerMode[];

const TimerModeNames = {
  [TimerMode.Pomodoro]: "Pomodoro",
  [TimerMode.ShortBreak]: "Short Break",
  [TimerMode.LongBreak]: "Long Break",
};

const ModeTimerSettings = {
  [TimerMode.Pomodoro]: 0.1 * 60,
  [TimerMode.ShortBreak]: 0.05 * 60,
  [TimerMode.LongBreak]: 0.15 * 60,
};

export default function Timer() {
  const [mode, setMode] = useState(TimerMode.Pomodoro);

  const onPomodoroCycleEnd = () => {
    if (mode === TimerMode.Pomodoro) {
      // Increase the number of pomodoros completed
      console.log("Pomodoro cycle ended");
    }
  };

  const { time, startTimer, pauseTimer } = useTimer(
    ModeTimerSettings[mode],
    () => {
      onPomodoroCycleEnd();
      setMode((mode + 1) % 3);
    }
  );

  const handleStartTimer = () => {
    // const startTime = new Date().getTime();
    // console.log("start time", startTime);g

    // setStartTime(startTime);
    startTimer();
  };

  const handleSetMode = (mode: TimerMode) => {
    setMode(mode);
  };

  const handlePauseTimer = () => {
    pauseTimer();
  };

  return (
    <>
      <title>{formatTime(time)}</title>
      <div>
        <ul>
          {TimerModeKeys.map((timerMode) => (
            <li key={timerMode}>
              <Button
                onClick={() => handleSetMode(timerMode)}
                className={cn({ "bg-primary/90": mode === timerMode })}
              >
                {TimerModeNames[timerMode]}
              </Button>
            </li>
          ))}
        </ul>
        <div>{formatTime(time)}</div>
        <Button onClick={handleStartTimer}>Start</Button>
        <Button onClick={handlePauseTimer}>Pause</Button>
      </div>
    </>
  );
}
