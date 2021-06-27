import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/atom/button';
import { FiSettings } from 'react-icons/fi';
import { FaRegChartBar, FaUserCircle } from 'react-icons/fa';
import { GiTomato } from 'react-icons/gi';
import Setting from 'components/organism/setting';
import './style.scss';

type ModalState = {
  setting: boolean;
  report: boolean;
  login: boolean;
};

const Header = (): JSX.Element => {
  const [openModal, setOpenModal] = useState<ModalState>({
    setting: false,
    report: false,
    login: false,
  });

  return (
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
        <Button onClick={() => setOpenModal({ ...openModal, setting: true })}>
          <FiSettings size="16px" />
          <span className="header--button__text">Setting</span>
        </Button>
        <Button>
          <FaUserCircle size="16px" />
          <span className="header--button__text">Login</span>
        </Button>
      </div>
      <Setting
        openSetting={openModal.setting}
        closeModal={() => setOpenModal({ ...openModal, setting: false })}
      />
    </header>
  );
};

export default Header;
