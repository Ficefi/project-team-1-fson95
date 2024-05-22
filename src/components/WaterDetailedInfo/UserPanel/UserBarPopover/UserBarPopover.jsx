//UserBarPopover.jsx
import css from './UserBarPopover.module.css';
import sprite from '../../../../../public/svg/sprite.svg';

const UserBarPopover = ({ toggleUserSetting, toggleLogOut }) => {
  return (
    <div className={css.popover_container} id="mypopover">
      <div className={css.popover_settings} onClick={toggleUserSetting}>
        <svg className={css.svg_settings} alt="Settings">
          <use href={`${sprite}#icon-settings`}></use>
        </svg>
        Setting
      </div>
      <div className={css.popover_log_out} onClick={toggleLogOut}>
        <svg className={css.svg_logout} alt="Log Out">
          <use href={`${sprite}#icon-log-out`}></use>
        </svg>
        Log out
      </div>
    </div>
  );
};
export default UserBarPopover;
