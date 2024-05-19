// DailyInfo.jsx
import { useEffect, useState, useRef } from 'react';
import { format } from 'date-fns';
import UserPanel from '../UserPanel/UserPanel';
import css from './DailyInfo.module.css';
import AddWaterBtn from './AddWaterBtn';
import MonthInfo from '../MonthInfo/MonthInfo';
import WaterList from '../WaterListItem/WaterList';
import UserBarPopover from '../UserBarPopover/UserBarPopover';
import { useDispatch } from 'react-redux';
import { fetchWaterByDay } from '../../redux/dailyInfoRedux/waterOperation';
import {
  toggleLogOutModal,
  toggleSettingsModal,
} from '../../redux/dailyInfoRedux/dailyInfoSlice';

const DailyInfo = () => {
  const [isUserBarOpen, setIsUserBarOpen] = useState(false);
  const referenceRef = useRef(null);

  const toggleUserBar = () => setIsUserBarOpen(!isUserBarOpen);

  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const updateSelectedDate = (date) => {
    setSelectedDate(date);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWaterByDay({ date: selectedDate }));
  }, [selectedDate, dispatch]);

  return (
    <div className={css.main_daily_container}>
      <div className={css.user_container}>
        <UserPanel referenceRef={referenceRef} toggleUserBar={toggleUserBar} />
        {isUserBarOpen && (
          <UserBarPopover
            referenceRef={referenceRef}
            toggleUserSetting={toggleSettingsModal}
            toggleLogOut={toggleLogOutModal}
          />
        )}
      </div>

      <div className={css.daily_info_container}>
        <div className={css.date}>
          {selectedDate
            ? format(selectedDate, 'dd, MMMM')
            : `Today ${format(new Date(), 'dd MMMM')}`}
        </div>
        <AddWaterBtn onSelectedDate={setSelectedDate} />
      </div>
      <div className={css.water_list}>
        <WaterList onSelectedDate={setSelectedDate} />
      </div>
      <MonthInfo
        selectedDate={selectedDate}
        onDateClick={handleDateClick}
        updateSelectedDate={updateSelectedDate}
      />
    </div>
  );
};

export default DailyInfo;
