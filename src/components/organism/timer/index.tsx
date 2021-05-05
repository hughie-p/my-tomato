import Button from 'components/atom/button';
import Input from 'components/atom/input';
import * as React from 'react';

const Timer = (): JSX.Element => {
  // const [type, setType] = React.useState('pomodoro');
  const [minute, setMinute] = React.useState(20);
  const [second, setSecond] = React.useState(0);

  React.useEffect(() => {
    const secondInterval = setInterval(() => setSecond(second - 1), 1000);
    return () => {
      clearInterval(secondInterval);
    };
  }, [second]);

  React.useEffect(() => {
    if (!second) {
      setMinute(minute - 1);
      setSecond(9);
    }
  });

  return (
    <React.Fragment>
      <Input />
      <Button onClick={() => setMinute(20)}>Test</Button>
      <h2>
        {minute}:{second}
      </h2>
    </React.Fragment>
  );
};

export default Timer;
