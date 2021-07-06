import { FaFacebookSquare, FaUserCircle } from 'react-icons/fa';
import Popup from 'reactjs-popup';
import { getFirebaseAuth } from 'contexts/auth';
import './style.scss';
import { AiOutlineGoogle } from 'react-icons/ai';

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

  const handleLoginFacebook = () => {
    try {
      getFirebaseAuth()
        .then(({ auth, facebookProvider }) => auth.signInWithPopup(facebookProvider))
        .catch((err) => {
          alert(err);
          return;
        });
    } catch (err) {
      console.error(err);
    }
  };

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
            <AiOutlineGoogle fontSize={16} className="login--icon" />
            Login with Google
          </button>
          <button type="button" onClick={handleLoginFacebook}>
            <FaFacebookSquare fontSize={16} className="login--icon" />
            Login with Facebook
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default LoginModal;
