/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import ProgressBar from 'components/atoms/progress';
import Status from 'components/atoms/status';
import Clock from 'components/molecules/clock';
import { convertToMinute } from 'helper/datetime';

const Timer = ({
  pomodoroTime,
  endTimePlan,
}: {
  pomodoroTime: number;
  endTimePlan: number;
}): JSX.Element => {
  const [remainTime, setRemainTime] = React.useState<number>(pomodoroTime);
  const [endTime, setEndTime] = React.useState<number>(endTimePlan);
  const [isClockRun, setIsClockRun] = React.useState<boolean>(false);

  const onClockStateChange = (): void => {
    if (remainTime) {
      setEndTime(Date.now() + remainTime);
      setIsClockRun(!isClockRun);
    }
  };

  const runClock = (): void => {
    const remain = 1000 * Math.ceil((endTime - Date.now()) / 1000);
    if (remain >= 0) {
      setRemainTime(remain);
    }
  };

  React.useEffect(() => {
    let clockTimeout: NodeJS.Timeout;
    if (isClockRun && remainTime) {
      clockTimeout = setTimeout(runClock, 1000);
    } else if (!remainTime) {
      setIsClockRun(false);
    }
    return () => clockTimeout && clearTimeout(clockTimeout);
  }, [isClockRun, remainTime]);

  const { min, sec } = convertToMinute(remainTime);
  return (
    <React.Fragment>
      <ProgressBar remainTime={remainTime} timeSet={pomodoroTime} />
      <Clock min={min} sec={sec} isClockRun={isClockRun} changeClockState={onClockStateChange} />
      <Status />
    </React.Fragment>
  );
};

export default Timer;
