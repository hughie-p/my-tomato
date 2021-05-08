import Button from 'components/atom/button';
import { convertTimeNumerToString } from 'helper/datetime';
import * as React from 'react';
import './style.scss';

const Clock = ({ min, sec }: { min: number; sec: number }): JSX.Element => (
  <div className="clock--wrapper">
    <div className="clock--button__modeSet">
      <Button active>Pomodoro</Button>
      <Button>Short Break</Button>
      <Button>Long Break</Button>
    </div>
    <div className="clock--timer">
      {convertTimeNumerToString(min)}:{convertTimeNumerToString(sec)}
    </div>
    <div className="clock--button__start">
      <Button>START</Button>
    </div>
  </div>
);

export default Clock;
