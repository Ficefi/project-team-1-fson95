import Modal from 'react-modal';

const modalWrapper = (WrappedComponent) => {
  return function ModalWrapper(props) {
    Modal.setAppElement('#root');
    const customStyles = {
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        zIndex: '1000',
      },
      content: {
        top: 'auto', // Встановлюємо автоматичну висоту зверху
        left: '50%',
        right: 'auto',
        bottom: '0', // Модальне вікно відображається знизу
        transform: 'translateX(-50%)',
        padding: '0px',
        borderRadius: '20px 20px 0 0', // Радіус тільки зверху
        backgroundColor: 'white',
        maxHeight: '80vh',
        overflowY: 'auto',
        scrollbarWidth: 'thin',
        scrollbarColor: 'transparent transparent',
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#888', // Сірий колір покажчика скролбара
          borderRadius: '8px',
          border: 'none',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-corner': {
          backgroundColor: 'transparent',
        },
      },
    };

    return (
      <div>
        <WrappedComponent />
        <Modal
          isOpen={props.isOpen}
          onRequestClose={props.isClose}
          style={customStyles}
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
