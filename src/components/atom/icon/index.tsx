import * as React from 'react';
import Facebook from 'images/icons/facebook.svg';
import Linkedin from 'images/icons/linkedin.svg';
import Twitter from 'images/icons/twitter.svg';
import './style.scss';

const Icon = {
  Facebook: (): JSX.Element => <img src={Facebook} alt="facebook" />,
  Linkedin: (): JSX.Element => <img src={Linkedin} alt="linkedin" />,
  Twitter: (): JSX.Element => <img src={Twitter} alt="twitter" />,
};

export default Icon;
