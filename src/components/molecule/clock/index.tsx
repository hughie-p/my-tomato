import Button from 'components/atom/button';
import { convertTimeNumerToString } from 'helper/datetime';
import * as React from 'react';
import './style.scss';

type Props = {
  isClockRun: boolean;
  changeClockStatus: React.MouseEventHandler<HTMLButtonElement>;
  min: number;
  sec: number;
};

const Clock = ({ changeClockStatus, isClockRun, min, sec }: Props): JSX.Element => (
  <div className="clock--wrapper">
    <div className="clock--button__modeSet">
      <Button className="clock--button__modeActived">Pomodoro</Button>
      <Button>Short Break</Button>
      <Button>Long Break</Button>
    </div>
    <div className="clock--timer">
      {convertTimeNumerToString(min)}:{convertTimeNumerToString(sec)}
    </div>
    <div className="clock--button__start">
      <Button onClick={changeClockStatus}>{!isClockRun ? 'start' : 'pause'}</Button>
    </div>
  </div>
);

export default Clock;
