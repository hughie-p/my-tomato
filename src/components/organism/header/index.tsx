import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/atom/button';
import { FiSettings } from 'react-icons/fi';
import { FaRegChartBar, FaUserCircle } from 'react-icons/fa';
import { GiTomato } from 'react-icons/gi';
import './style.scss';

const Header = (): JSX.Element => (
  <header>
    <Link to="/" className="header--link__home">
      <h2>
        <GiTomato />
        <span className="header--text">Focuss</span>
      </h2>
    </Link>
    <div className="header--button">
      <Button>
        <FaRegChartBar size="16px" />
        <span className="header--button__text">Report</span>
      </Button>
      <Button>
        <FiSettings size="16px" />
        <span className="header--button__text">Setting</span>
      </Button>
      <Button>
        <FaUserCircle size="16px" />
        <span className="header--button__text">Login</span>
      </Button>
    </div>
  </header>
);

export default Header;
