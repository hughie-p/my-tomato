import { FaUserAlt } from 'react-icons/fa';
import Popup from 'reactjs-popup';

const userProfile = () => (
  <button
    type="button"
    onClick={() => {
      console.log('close');
    }}
  >
    <FaUserAlt fontSize={14} className="userModal--icon" />
    <span>Profile</span>
  </button>
);

const UserProfile = (): JSX.Element => (
  <Popup trigger={userProfile()} modal nested closeOnDocumentClick>
    <div className="userModal--content">
      <div className="userModal--button">
        <button type="button">
          <FaUserAlt fontSize={14} className="userModal--icon" />
          <span>Profile</span>
        </button>
      </div>
    </div>
  </Popup>
);

export default UserProfile;
