import { ButtonContainer, ModalBox } from './UserLogoutModal.module.css';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ModalContainer from '../ModalContainer/ModalContainer';
import { useDispatch } from 'react-redux'; //отримуємо функцію dispatch
import { logOutAPI } from '../../store/auth/authOperations';

const UserLogoutModal = ({ onModalClose, isModalOpen }) => {
  const dispatch = useDispatch();
  //відправлення дії logOutAPI
  const handleLogout = () => {
    dispatch(logOutAPI());
  };
  //Якщо isModalOpen має значення true,
  //відтворюємо компонент ModalContainer
  return (
    <>
      {isModalOpen && (
        <ModalContainer onClose={onModalClose}>
          <ModalBox>
            <div>
              <div className="popular">
                <h2>Log out</h2>
                <CloseOutlinedIcon className="close" onClick={onModalClose} />
              </div>
              <p>Do you really want to leave?</p>
            </div>
            <ButtonContainer>
              <button className="delete" onClick={handleLogout}>
                Log out
              </button>
              <button className="cancel" onClick={onModalClose}>
                Cancel
              </button>
            </ButtonContainer>
          </ModalBox>
        </ModalContainer>
      )}
    </>
  );
};

export default UserLogoutModal;
