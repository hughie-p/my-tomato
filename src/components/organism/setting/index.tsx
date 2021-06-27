import Popup from 'reactjs-popup';
import { AiOutlineClose } from 'react-icons/ai';
import Button from 'components/atom/button';
import './style.scss';

type Props = {
  openSetting: boolean;
  closeModal: any;
};

const Setting = ({ openSetting, closeModal }: Props): JSX.Element => (
  <Popup open={openSetting} onClose={closeModal}>
    <div className="setting-content">
      <div className="setting--header">
        <div className="setting--heading">setting</div>
        <Button className="setting--button__close" onClick={closeModal}>
          <AiOutlineClose />
        </Button>
      </div>
    </div>
  </Popup>
);

export default Setting;
