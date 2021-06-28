export const convertToMinute = (timeInMs: number): { min: number; sec: number } => {
  const MS_PER_SECOND = 1000;
  const SECOND_PER_MINUTE = 60;
  const MS_PER_MINIUTE = 60000;

  const minute = Math.floor(timeInMs / MS_PER_MINIUTE);
  const second = Math.floor(timeInMs / MS_PER_SECOND - minute * SECOND_PER_MINUTE);
  return { min: minute, sec: second };
};

export const convertTimeNumerToString = (time: number): string => `0${time}`.slice(-2);
