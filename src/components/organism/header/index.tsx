import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/atom/button';
// import Logo from 'images/tomato.svg';
import './style.scss';

const Header = (): JSX.Element => (
  <header>
    <Link to="/">
      <h2>
        {/* <img src={Logo} alt="logo" /> */}
        <span>Focus</span>
      </h2>
    </Link>
    <div>
      <Button>Report</Button>
      <Button>Setting</Button>
      <Button>Login</Button>
    </div>
  </header>
);

export default Header;
