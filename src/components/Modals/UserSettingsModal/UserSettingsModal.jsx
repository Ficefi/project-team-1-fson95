import CustomModal from './Modal/Modal';
import UserSettingsForm from '../../UserSettingsForm/UserSettingsForm';
import { AiOutlineClose } from 'react-icons/ai';
// import IconX from './image/sprite.svg';
import css from './UserSettingsModal.module.css';

export default function UserSettingsModal({ isOpen, isClose }) {
  return (
    <CustomModal isOpen={isOpen} isClose={isClose}>
      <div className={css.containerModal}>
        <button className={css.closeBtn} onClick={isClose}>
          <AiOutlineClose size="18" />
        </button>
        <h3 className={css.title}>Setting</h3>
        <UserSettingsForm closeModal={isClose} />
      </div>
    </CustomModal>
  );
}
