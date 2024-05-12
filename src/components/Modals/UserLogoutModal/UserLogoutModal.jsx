import { ButtonContainer, ModalBox } from './UserLogoutModal.styled';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ModalContainer from '../ModalContainer/ModalContainer';
import { useDispatch } from 'react-redux';
import { logOutAPI } from '../../store/auth/authOperations';

const UserLogoutModal = ({ onModalClose, isModalOpen }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutAPI());
  };
  return (
    <>
      {isModalOpen && (
        <ModalContainer onClose={onModalClose}>
          <ModalBox>
            <div>
              <div className="topline">
                <h2>Log out</h2>
                <CloseOutlinedIcon className="close" onClick={onModalClose} />
              </div>
              <p>Do you really want to leave?</p>
            </div>
            <ButtonContainer>
              <button className="confirm" onClick={handleLogout}>
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
