import css from './UserPanel.module.css';
import sprite from '../../assets/svg/sprite.svg';
import testAvatar from '../../assets/test-avatar.jpg';
import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import { togglePopover } from '../../redux/dailyInfoRedux/dailyInfoSlice';

const UserPanel = ({ userName, userAvatarUrl }) => {
  const [isUserBarOpen, setIsUserBarOpen] = useState(false);
  const dispatch = useDispatch();
  const referenceRef = useRef(null);

  const handleClick = () => {
    dispatch(togglePopover());
    toggleUserBar();
  };

  const toggleUserBar = () => {
    setIsUserBarOpen(!isUserBarOpen);
  };

  return (
    <div className={css.user_panel}>
      <div className={css.user_header}>
        Hello, <span>{userName || 'User'}!</span>
      </div>
      <div className={css.popover_container} ref={referenceRef}>
        <div className={css.user_button} onClick={handleClick}>
          <span>{userName || 'User'}</span>
          <img
            className={css.user_avatar}
            src={userAvatarUrl || testAvatar}
            alt="User Avatar"
          />
          <svg className={css.chevron_icon}>
            <use
              href={`${sprite}#icon-chevron-${isUserBarOpen ? 'up' : 'down'}`}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
