import Button from 'components/atom/button';
import { convertTimeNumerToString } from 'helper/datetime';
import * as React from 'react';
import './style.scss';

type Props = {
  isClockRun: boolean;
  changeClockState: React.MouseEventHandler<HTMLButtonElement>;
  min: number;
  sec: number;
};

const Clock = ({ changeClockState, isClockRun, min, sec }: Props): JSX.Element => (
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
      <Button onClick={changeClockState}>{!isClockRun ? 'start' : 'stop'}</Button>
    </div>
  </div>
);

export default Clock;
