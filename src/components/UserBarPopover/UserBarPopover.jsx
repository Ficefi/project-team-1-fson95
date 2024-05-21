//UserBarPopover.jsx
import css from './UserBarPopover.module.css';
import sprite from '../../assets/svg/sprite.svg';
import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import UserSettingsModal from '../Modals/UserSettingsModal/UserSettingsModal.jsx';
import LogOutModal from '../Modals/LogOutModal/LogOutModal.jsx';
//1 - знайти місцеположення кнопки and react on viewport size change
//2 - змістити поповер на потрібне місце
// 3 - клік поза межами поповера або кнопки - закрити
// 4 - стилізувати
const UserBarPopover = ({ buttonRef, isOpened, toggle }) => {
  const [dimensions, setDimensions] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const popoverRef = useRef(null);

  useEffect(() => {
    if (isOpened) {
      setDimensions(buttonRef.current.getBoundingClientRect());
    }
  }, [buttonRef, isOpened]);

  useEffect(() => {
    const handleResize = () => {
      if (isOpened) {
        setDimensions(buttonRef.current.getBoundingClientRect());
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [buttonRef, isOpened]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        toggle();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggle]);

  const handleModalOpen = (type) => {
    setIsModalOpen(true);
    setModalType(type);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  const { left = 0, bottom = 0 } = dimensions ?? {};

  return isOpened ? (
    <>
      {createPortal(
        <div
          className={css.popover_container}
          style={{
            transform: `translate(${left}px, ${bottom}px)`,
          }}
          ref={popoverRef}
        >
          <div
            onClick={() => handleModalOpen('setting')}
            className={css.popover_settings}
          >
            <svg className={css.svg_settings} alt="Settings">
              <use href={`${sprite}#icon-settings`}></use>
            </svg>
            Setting
          </div>
          <div
            onClick={() => handleModalOpen('logout')}
            className={css.popover_log_out}
          >
            <svg className={css.svg_logout} alt="Log Out">
              <use href={`${sprite}#icon-log-out`}></use>
            </svg>
            Log out
          </div>
        </div>,
        document.body
      )}
      <UserSettingsModal
        isOpen={isModalOpen && modalType === 'setting'}
        onClose={handleModalClose}
      />
      <LogOutModal
        isOpen={isModalOpen && modalType === 'logout'}
        onClose={handleModalClose}
      />
    </>
  ) : null;
};

export default UserBarPopover;
