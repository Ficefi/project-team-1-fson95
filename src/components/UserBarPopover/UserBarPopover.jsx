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
  useEffect(() => {
    if (!isOpened) {
      return;
    }
    setDimensions(buttonRef.current.getBoundingClientRect());
  }, [buttonRef, isOpened]);
  const popoverRef = useRef(null);
  useEffect(() => {
    if (!isOpened) {
      return;
    }
    const cb = () => {
      setDimensions(buttonRef.current.getBoundingClientRect());
    };
    window.addEventListener('resize', cb);
    return () => {
      window.removeEventListener('resize', cb);
    };
  }, [buttonRef, isOpened]);

  useEffect(() => {
    if (!isOpened) {
      return;
    }
    function handleClick(event) {
      const { target } = event;
      if (
        popoverRef.current === target ||
        buttonRef.current === target ||
        popoverRef.current.contains(target) ||
        buttonRef.current.contains(target)
      ) {
        return;
      }
      toggle();
    }
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [buttonRef, toggle, isOpened]);

  const { left = 0, bottom = 0 } = dimensions ?? {};

  //open modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setIsModalOpen(true);
    setModalType(type);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  return (
    isOpened && (
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
              onClick={() => openModal('setting')}
              className={css.popover_settings}
            >
              <svg className={css.svg_settings} alt="Settings">
                <use href={`${sprite}#icon-settings`}></use>
              </svg>
              Setting
            </div>
            <div
              onClick={() => openModal('logout')}
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

        {isModalOpen && modalType === 'setting' && (
          <UserSettingsModal onClose={closeModal} />
        )}
        {isModalOpen && modalType === 'logout' && (
          <LogOutModal onClose={closeModal} />
        )}
      </>
    )
  );
};

export default UserBarPopover;
