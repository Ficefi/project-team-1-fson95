//UserBarPopover.jsx
import css from './UserBarPopover.module.css';
import sprite from '../../assets/svg/sprite.svg';
import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  togglePopover,
  setPopoverDimensions,
} from '../../redux/dailyInfoRedux/dailyInfoSlice';

const UserBarPopover = ({ referenceRef }) => {
  const [dimensions, setDimensions] = useState({ bottom: 0, left: 0 });

  const buttonRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const rect = referenceRef.current?.getBoundingClientRect();
    if (rect) {
      setDimensions(rect);
      dispatch(setPopoverDimensions(rect));
    }
  }, [referenceRef, dispatch]);

  useEffect(() => {
    function handleClickOutside(event) {
      const popover = document.querySelector(`.${css.popover_container}`);
      if (
        popover &&
        !popover.contains(event.target) &&
        buttonRef.current !== event.target
      ) {
        dispatch(togglePopover());
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch]);

  const { bottom, left } = dimensions;

  const handleClick = () => {
    dispatch(togglePopover());
  };

  const toggleSettingsModal = () => {
    dispatch(toggleSettingsModal());
  };

  const toggleLogOutModal = () => {
    dispatch(toggleLogOutModal());
  };

  return createPortal(
    <div
      onClick={handleClick}
      ref={referenceRef}
      className={css.popover_container}
      style={{
        transform: `translate(${left}px, ${bottom}px)`,
      }}
    >
      <div className={css.popover_settings} onClick={toggleSettingsModal}>
        <svg className={css.svg_settings} alt="Settings">
          <use href={`${sprite}#icon-settings`}></use>
        </svg>
        Setting
      </div>
      <div className={css.popover_log_out} onClick={toggleLogOutModal}>
        <svg className={css.svg_logout} alt="Log Out">
          <use href={`${sprite}#icon-log-out`}></use>
        </svg>
        Log out
      </div>
    </div>,
    document.body
  );
};
export default UserBarPopover;

//dispatch - це функція, яка використовується для відправлення actions до Redux store. Вона є одним із основних методів, які надає бібліотека Redux для взаємодії зі стором.
//!рядок const dispatch = useDispatch(); - це спосіб отримати функцію dispatch в компоненті React, щоб взаємодіяти зі станом Redux.
//наступний рядок отримує userName, userAvatarUrl і isPopoverOpen зі стану Redux та присвоює їх змінним, щоб ми могли використовувати їх в компоненті для відображення даних користувача та керування станом popover
//handleClick - відправляє action до Redux store, який змінює стан popover з відкритого на закритий або навпаки, в залежності від поточного стану
