import { useEffect } from 'react';
import { ModalWrapper } from './ModalContainer.styled';

const ModalContainer = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.documentElement.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.documentElement.style.overflow = 'visible';
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return <ModalWrapper onClick={handleBackdropClick}>{children}</ModalWrapper>;
};

export default ModalContainer;
