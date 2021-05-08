import * as React from 'react';
import './style.scss';

const ProgressBar = ({
  remainTime,
  timeSet,
}: {
  remainTime: number;
  timeSet: number;
}): JSX.Element => {
  const percentage = 100 - Number(((remainTime * 100) / timeSet).toFixed(2));

  return (
    <div className="progressBar--wrapper">
      <div
        className="progressBar--runner"
        style={{
          width: `${percentage}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
