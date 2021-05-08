import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/atom/button';
import Logo from 'images/deadline.png';
import './style.scss';

const Header = (): JSX.Element => (
  <React.Fragment>
    <Link to="/">
      <img src={Logo} alt="logo" />
    </Link>
    <div>
      <Button>Setting</Button>
    </div>
  </React.Fragment>
);

export default Header;
