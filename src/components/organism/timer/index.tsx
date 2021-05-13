/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import ProgressBar from 'components/atom/progress';
import Status from 'components/atom/status';
import Clock from 'components/molecule/clock';
import { convertToMinute } from 'helper/datetime';
import * as React from 'react';

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

  const onClockStatusChange = (): void => {
    if (remainTime) setIsClockRun(!isClockRun);
  };

  const runClock = (): void => {
    const remain = 1000 * Math.ceil((endTime - Date.now()) / 1000);
    if (remain >= 0) {
      setRemainTime(remain);
    } else {
      setIsClockRun(false);
    }
  };

  React.useEffect(() => {
    let clockTimeout: NodeJS.Timeout;
    if (isClockRun && remainTime) {
      clockTimeout = setTimeout(runClock, 1000);
    }
    return () => clockTimeout && clearTimeout(clockTimeout);
  }, [isClockRun, remainTime]);

  const { min, sec } = convertToMinute(remainTime);
  return (
    <React.Fragment>
      <ProgressBar remainTime={remainTime} timeSet={pomodoroTime} />
      <Clock min={min} sec={sec} isClockRun={isClockRun} changeClockStatus={onClockStatusChange} />
      <Status />
    </React.Fragment>
  );
};

export default Timer;
