import * as React from 'react';
import cls from 'classnames';
import './style.scss';

interface Props {
  className?: string;
  active?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
}

const Button = (props: Props): JSX.Element => {
  const { children, className = '', onClick, active } = props;
  const classNames = cls({ active, [className]: !!className });
  return (
    <button className={`${classNames}`} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
