import React from 'react';
import './style.scss';

type Props = {
  children: React.ReactNode;
};

export default {
  H1: ({ children }: Props): JSX.Element => <h1>{children}</h1>,
  H2: ({ children }: Props): JSX.Element => <h2>{children}</h2>,
  H3: ({ children }: Props): JSX.Element => <h3>{children}</h3>,
  H4: ({ children }: Props): JSX.Element => <h4>{children}</h4>,
  H5: ({ children }: Props): JSX.Element => <h5>{children}</h5>,
};
