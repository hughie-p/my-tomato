import * as React from 'react';

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Input = ({ onChange }: Props): JSX.Element => <input type="text" onChange={onChange} />;

export default Input;
