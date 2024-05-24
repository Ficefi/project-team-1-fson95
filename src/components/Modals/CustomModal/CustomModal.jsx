import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import css from './CustomModal.module.css';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    height: 'auto',
    width: 'auto',
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    border: 'none',
    marginRight: '-50%',
    backgroundSize: 'cover',
    backgroundColor: 'transparent',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    background: 'rgba(22, 22, 22, 0.8)',
  },
};

const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className={css.modalBox}>
        <span onClick={onClose} className={css.closedModal}>
          <AiOutlineClose size="18" />
        </span>
        {children}
      </div>
    </Modal>
  );
};

export default CustomModal;
