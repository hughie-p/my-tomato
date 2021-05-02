import * as React from 'react';

interface Props {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
}

const Button = (props: Props): React.ReactNode => {
  const { children, onClick } = props;
  return (
    <button onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
