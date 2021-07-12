import { useContext } from 'react';
import Popup from 'reactjs-popup';
import firebase from 'firebase/app';
import { FaRocket } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { AiTwotoneDelete } from 'react-icons/ai';
import { AuthContext, getFirebaseAuth } from 'contexts/auth';
import UserProfile from 'components/molecules/UserProfile';
import './style.scss';

const triggerModal = ({ photoURL, displayName }): JSX.Element => (
  <button className="header--button__user" type="button">
    <img src={photoURL} alt={displayName} />
  </button>
);

const UserModal = (): JSX.Element => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const { photoURL, displayName } = user as firebase.UserInfo;

  const handleLogout = () => {
    getFirebaseAuth()
      .then(({ auth }) => auth.signOut())
      .catch((err) => console.error(err));
  };

  return (
    <Popup trigger={triggerModal({ photoURL, displayName })} position="bottom right" nested>
      <div className="userModal--content">
        <div className="userModal--button">
          <UserProfile />
          <button type="button" onClick={() => alert('In progress')}>
            <FaRocket fontSize={14} className="userModal--icon" />
            Subscription
          </button>
          <button type="button" onClick={handleLogout}>
            <FiLogOut fontSize={14} className="userModal--icon" />
            Logout
          </button>
          <button type="button" onClick={() => alert('In progress')}>
            <AiTwotoneDelete fontSize={16} className="userModal--icon" />
            Delete Account
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default UserModal;
