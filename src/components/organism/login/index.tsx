import { FaFacebookSquare, FaUserCircle } from 'react-icons/fa';
import Popup from 'reactjs-popup';
import { getFirebaseAuth } from 'contexts/auth';
import './style.scss';

const LoginButton = () => (
  <button type="button">
    <FaUserCircle size="16px" />
    <span className="header--button__text">Login</span>
  </button>
);

const LoginModal = (): JSX.Element => {
  const handleLoginGoogle = () => {
    try {
      getFirebaseAuth().then(({ auth, googleProvider }) => auth.signInWithPopup(googleProvider));
    } catch (err) {
      console.error(err);
    }
  };

  const handleLoginFacebook = () => {};

  return (
    <Popup
      className="login-modal"
      trigger={LoginButton}
      position="bottom right"
      closeOnDocumentClick
    >
      <div className="login--content">
        <div className="login--icon">
          <button type="button" onClick={handleLoginGoogle}>
            <FaFacebookSquare />
            Login with Google
          </button>
          <button type="button" onClick={handleLoginFacebook}>
            Login with Email
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default LoginModal;
