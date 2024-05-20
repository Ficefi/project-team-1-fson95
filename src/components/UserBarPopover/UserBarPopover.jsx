//UserBarPopover.jsx
import css from './UserBarPopover.module.css';
import sprite from '../../assets/svg/sprite.svg';
import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import {
  toggleLogOutModal,
  toggleSettingsModal,
} from '../../redux/dailyInfoRedux/dailyInfoSlice';
import { useDispatch } from 'react-redux';

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
    console.log('add window resize handler');
    return () => {
      console.log('remove window resize handler');
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
    console.log('add click outside handler');
    return () => {
      console.log('remove click outside handler');
      document.removeEventListener('mousedown', handleClick);
    };
  }, [buttonRef, toggle, isOpened]);

  const { left = 0, bottom = 0 } = dimensions ?? {};
  const dispatch = useDispatch();
  return (
    isOpened &&
    createPortal(
      <div
        className={css.popover_container}
        style={{
          transform: `translate(${left}px, ${bottom}px)`,
        }}
        ref={popoverRef}
      >
        <div
          className={css.popover_settings}
          onClick={() => dispatch(toggleSettingsModal())}
        >
          <svg className={css.svg_settings} alt="Settings">
            <use href={`${sprite}#icon-settings`}></use>
          </svg>
          Setting
        </div>
        <div
          className={css.popover_log_out}
          onClick={() => dispatch(toggleLogOutModal())}
        >
          <svg className={css.svg_logout} alt="Log Out">
            <use href={`${sprite}#icon-log-out`}></use>
          </svg>
          Log out
        </div>
      </div>,
      document.body
    )
  );
};
export default UserBarPopover;
