import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/operations';
import CustomModal from '../CustomModal/CustomModal';
import css from './LogoutModal.module.css';

const LogOutModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  return (
    <>
      <CustomModal isOpen={isOpen} onClose={onClose}>
        <h4 className={css.out_header}>Log out</h4>
        <p className={css.out_text}>Do you really want to leave?</p>
        <div className={css.btn_container}>
          <button className={css.out_button} onClick={() => dispatch(logOut())}>
            Log out
          </button>
          <button className={css.out_button} onClick={onClose}>
            Cancel
          </button>
        </div>
      </CustomModal>
    </>
  );
};

export default LogOutModal;
