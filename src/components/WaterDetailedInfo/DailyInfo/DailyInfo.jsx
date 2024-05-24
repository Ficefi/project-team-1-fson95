//DailyInfo.jsx

import { useState } from 'react';
import UserSettingsModal from '../../Modals/UserSettingsModal/UserSettingsModal';
import LogOutModal from '../../Modals/LogOutModal/LogOutModal.jsx';
import css from './DailyInfo.module.css';
import AddWaterBtn from './AddWaterBtn';
import WaterList from './WaterList';

const DailyInfo = () => {
  // стан відкриття/закриття модальних вікон
  const [isUserSettingsOpen, setIsUserSettingsOpen] = useState(false);
  const [isLogOutOpen, setIsLogOutOpen] = useState(false);
  // зміна станів
  const toggleUserSettings = () => setIsUserSettingsOpen(!isUserSettingsOpen);
  const toggleLogOut = () => setIsLogOutOpen(!isLogOutOpen);

  return (
    <div className={css.main_daily_container}>
      <div className={css.daily_info_container}>
        <div className={css.date}>Today</div>
        <AddWaterBtn />
      </div>
      <div className={css.water_list}>
        <WaterList />
      </div>

      {isUserSettingsOpen && (
        <UserSettingsModal toggleUserSettings={toggleUserSettings} />
      )}
      {isLogOutOpen && <LogOutModal toggleLogOut={toggleLogOut} />}
    </div>
  );
};

export default DailyInfo;
