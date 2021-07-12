import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { FaRegChartBar } from 'react-icons/fa';
import { GiTomato } from 'react-icons/gi';
import { AuthContext } from 'contexts/auth';
import Setting from 'components/organisms/Setting';
import Button from 'components/atoms/Button';
import Login from '../Login';
import './style.scss';
import User from '../User';

type ModalState = {
  setting: boolean;
  report: boolean;
  login: boolean;
};

const Header = (): JSX.Element => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

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
        {user !== null ? <User /> : <Login />}
      </div>
      <Setting
        openSetting={openModal.setting}
        closeModal={() => setOpenModal({ ...openModal, setting: false })}
      />
    </header>
  );
};

export default Header;
