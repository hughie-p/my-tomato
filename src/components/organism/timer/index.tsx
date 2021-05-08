import Button from 'components/atom/button';
import Input from 'components/atom/input';
import { convertToMinute } from 'helper/datetime';
import * as React from 'react';

const Timer = ({
  pomodoroTime,
  endTimePlan,
}: {
  pomodoroTime: number;
  endTimePlan: number;
}): JSX.Element => {
  const [inputVal, setInputVal] = React.useState<string>('');
  const [remainTime, setRemainTime] = React.useState<number>(pomodoroTime);
  const [endTime, setEndTime] = React.useState<number>(endTimePlan);

  const startCouter = () => {
    const remain = endTime - Date.now();
    if (remain) setRemainTime(remain);
  };

  React.useEffect(() => {
    const couterTimeout = setTimeout(startCouter, 1000);
    return () => clearTimeout(couterTimeout);
  }, [remainTime]);

  const { min, sec } = convertToMinute(remainTime);
  return (
    <React.Fragment>
      <Input onChange={() => setInputVal(inputVal)} />
      {/* <button onClick={() => setCouter(+inputVal)} /> */}
      <Button onClick={startCouter}>START</Button>
      <Button onClick={() => setEndTime(Date.now() + remainTime)}>STOP</Button>
      <h2>
        {min}: {sec}
      </h2>
    </React.Fragment>
  );
};

export default Timer;
