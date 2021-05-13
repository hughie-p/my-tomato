interface TimerMode {
  id: number;
  name: string;
  time: number;
}

export const MODE: TimerMode[] = [
  {
    id: 1,
    name: 'Pomodoro',
    time: 90000,
  },
];
