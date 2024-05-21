import css from './UserPanel.module.css';
import sprite from '../../assets/svg/sprite.svg';
import testAvatar from '../../assets/test-avatar.jpg';
import { useRef, useState } from 'react';
import UserBarPopover from '../UserBarPopover/UserBarPopover';
import { useSelector } from 'react-redux';
import { userSlice } from '../../redux/dailyInfoRedux/userSlice';

const UserPanel = () => {
  const buttonRef = useRef(null);
  const [isUserBarOpen, setIsUserBarOpen] = useState(false);
  const userName = useSelector(userSlice.selectors.name);
  const avatarURL = useSelector(userSlice.selectors.avatarURL);
  const toggleUserBar = () => {
    setIsUserBarOpen(!isUserBarOpen);
  };

  return (
    <div className={css.user_panel}>
      <div className={css.user_header}>
        Hello, <span>{userName || 'User'}!</span>
      </div>
      <button
        className={css.user_button}
        ref={buttonRef}
        onClick={toggleUserBar}
      >
        <span>{userName || 'User'}</span>
        <img
          className={css.user_avatar}
          src={avatarURL || testAvatar}
          alt="User Avatar"
        />
        <svg className={css.chevron_icon}>
          <use
            href={`${sprite}#icon-chevron-${isUserBarOpen ? 'up' : 'down'}`}
          />
        </svg>
      </button>
      <UserBarPopover
        buttonRef={buttonRef}
        isOpened={isUserBarOpen}
        toggle={toggleUserBar}
      />
    </div>
  );
};

export default UserPanel;
