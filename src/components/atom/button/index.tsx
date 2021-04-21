import * as React from 'react';

interface Props {
  children: JSX.Element[] | JSX.Element;
  onClick: React.MouseEventHandler;
}

const Button: React.FC<Props> = (props: Props) => {
  const { children, onClick } = props;
  return (
    <button onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
