import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

// TODO: Root component catch error, check browser compatible, init google analytics
const Root = ({ children }: Props): JSX.Element => <React.Fragment>{children}</React.Fragment>;

export default Root;
