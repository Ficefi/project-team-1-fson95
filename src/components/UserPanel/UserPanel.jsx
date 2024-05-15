import { useState, useRef, useEffect } from 'react';
import UserBarPopover from '../UserBarPopover/UserBarPopover';
import css from './UserPanel.module.css';
import sprite from '../../assets/svg/sprite.svg';
import { testUser } from '../../assets/data';

const UserPanel = ({ userName, userAvatarUrl }) => {
  //стан відкрито/закрито
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  //посилання на ел. popover
  const popoverRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    //при кліку поза popover - закрити popover
    function handleClickOutside(event) {
      //чи popoverRef існує і чи кл. на кнопку і чи клікнуто поза ним
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        buttonRef.current !== event.target
      ) {
        setIsPopoverOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const { name, avatarUrl } = testUser;
  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div className={css.user_panel}>
      <div className={css.user_header}>
        Hello, <span>{userName || name || 'User'}!</span>
      </div>

      <div className={css.popover_container} ref={popoverRef}>
        <div
          className={css.user_button}
          id="toggleBtn"
          onClick={togglePopover}
          ref={buttonRef}
        >
          <span>{userName || name || 'User'}</span>
          <img
            className={css.user_avatar}
            src={userAvatarUrl || avatarUrl}
            alt="User Avatar"
          />
          <svg className={css.chevron_icon}>
            <use
              href={`${sprite}#icon-chevron-${isPopoverOpen ? 'up' : 'down'}`}
            />
          </svg>
        </div>

        {isPopoverOpen && (
          <UserBarPopover
            id="mypopover"
            toggleUserSetting={togglePopover}
            toggleLogOut={togglePopover}
          />
        )}
      </div>
    </div>
  );
};

export default UserPanel;
