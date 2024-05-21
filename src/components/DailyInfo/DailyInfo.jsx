//DailyInfo.jsx

import { useState } from 'react';
import UserPanel from '../UserPanel/UserPanel';
import UserSettingsModal from '../Modals/UserSettingsModal';
import LogOutModal from '../Modals/LogOutModal';
import UserBarPopover from '../UserBarPopover/UserBarPopover';
import css from './DailyInfo.module.css';
import AddWaterBtn from './AddWaterBtn';
import WaterList from './WaterList';

const DailyInfo = () => {
  // стан відкриття/закриття модальних вікон
  const [isUserBarOpen, setIsUserBarOpen] = useState(false);
  const [isUserSettingsOpen, setIsUserSettingsOpen] = useState(false);
  const [isLogOutOpen, setIsLogOutOpen] = useState(false);
  // зміна станів
  const toggleUserBar = () => setIsUserBarOpen(!isUserBarOpen);
  const toggleUserSettings = () => setIsUserSettingsOpen(!isUserSettingsOpen);
  const toggleLogOut = () => setIsLogOutOpen(!isLogOutOpen);

  return (
    <div className={css.main_daily_container}>
      <div className={css.user_container}>
        <UserPanel toggleUserBar={toggleUserBar} />
        {isUserBarOpen && (
          <UserBarPopover
            toggleUserSetting={toggleUserSettings}
            toggleLogOut={toggleLogOut}
          />
        )}
      </div>

      <div className={css.daily_info_container}>
        <div className={css.date}>Today</div>
        <AddWaterBtn />
      </div>
      <div className={css.water_list}>
        <WaterList />
      </div>
      <div>Calendar</div>

      {isUserSettingsOpen && (
        <UserSettingsModal toggleUserSettings={toggleUserSettings} />
      )}
      {isLogOutOpen && <LogOutModal toggleLogOut={toggleLogOut} />}
    </div>
  );
};

export default DailyInfo;
