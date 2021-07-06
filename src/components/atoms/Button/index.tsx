import * as React from 'react';
import cls from 'classnames';
import './style.scss';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  active?: boolean;
}

const Button = (props: Props): JSX.Element => {
  const { children, onClick, className = '', active } = props;
  const classNames = cls({ active: !!active });
  return (
    <button className={`${className}${classNames}`} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
