import Modal from 'react-modal';
import css from './Modal.module.css';

const modalWrapper = (WrappedComponent) => {
  return function ModalWrapper(props) {
    Modal.setAppElement('#root');

    const customStyles1 = {
      overlay: {
        background: 'rgba(22, 22, 22, 0.8)',
        zIndex: '1000',
      },
      content: {
        top: 'auto',
        left: '50%',
        right: 'auto',
        bottom: '0',
        transform: 'translateX(-50%)',
        padding: '0px',
        borderRadius: '20px 20px 0 0',
        backgroundColor: 'white',
        maxHeight: '90vh',
        overflowY: 'auto',
        scrollbarWidth: 'thin',
      },
    };

    return (
      <div className={css.customScrollContainer}>
        <WrappedComponent />
        <Modal
          isOpen={props.isOpen}
          onRequestClose={props.isClose}
          style={customStyles1}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          contentLabel="modalWrapper"
        >
          {props.children}
        </Modal>
      </div>
    );
  };
};

const WrappedComponent = ({ children }) => {
  return <>{children}</>;
};

const ComponentWithModal = modalWrapper(WrappedComponent);

export default ComponentWithModal;
