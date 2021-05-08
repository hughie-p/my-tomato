import ProgressBar from 'components/atom/progress';
import Status from 'components/atom/status';
import Clock from 'components/molecule/clock';
// import Input from 'components/atom/input';
import { convertToMinute } from 'helper/datetime';
import * as React from 'react';

const Timer = ({
  pomodoroTime,
  endTimePlan,
}: {
  pomodoroTime: number;
  endTimePlan: number;
}): JSX.Element => {
  // const [inputVal, setInputVal] = React.useState<string>('');
  const [remainTime, setRemainTime] = React.useState<number>(pomodoroTime);
  const [endTime, setEndTime] = React.useState<number>(endTimePlan);

  const startTimer = () => {
    const remain = endTime - Date.now();
    setRemainTime(remain);
  };

  React.useEffect(() => {
    const couterTimeout = setTimeout(startTimer, 1000);
    return () => clearTimeout(couterTimeout);
  }, [remainTime]);

  const { min, sec } = convertToMinute(remainTime);
  return (
    <React.Fragment>
      {/* <Input onChange={() => setInputVal(inputVal)} /> */}
      {/* <button onClick={() => setCouter(+inputVal)} /> */}
      {/* <Button onClick={startCouter}>START</Button> */}
      {/* <Button onClick={() => setEndTime(Date.now() + remainTime)}>STOP</Button> */}
      <ProgressBar remainTime={remainTime} timeSet={pomodoroTime} />
      <Clock min={min} sec={sec} />
      <Status />
    </React.Fragment>
  );
};

export default Timer;
