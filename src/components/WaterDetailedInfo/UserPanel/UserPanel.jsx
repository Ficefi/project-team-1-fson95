import css from './UserPanel.module.css';
import sprite from '../../../../public/svg/sprite.svg';
import UserBarPopover from './UserBarPopover/UserBarPopover';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/selectors';

const UserPanel = () => {
  const buttonRef = useRef(null);
  const [isUserBarOpen, setIsUserBarOpen] = useState(false);
  const { name, email, avatarURL } = useSelector(selectUser);
  const alternativeName = email.split('@')[0];
  const toggleUserBar = () => {
    setIsUserBarOpen(!isUserBarOpen);
  };

  return (
    <div className={css.user_panel}>
      <div className={css.user_header}>
        Hello, <span>{name || alternativeName}!</span>
      </div>
      <button
        className={css.user_button}
        ref={buttonRef}
        onClick={toggleUserBar}
      >
        <span>{name || alternativeName}</span>
        <img className={css.user_avatar} src={avatarURL} alt="User Avatar" />
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
