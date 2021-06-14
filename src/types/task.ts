export type TaskData = {
  task: {
    id: number;
    done: boolean;
    todo: string;
    pomodoro: number;
    note?: string;
  };
};
