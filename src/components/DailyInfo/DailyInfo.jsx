// DailyInfo.jsx
import { useEffect } from 'react';
import { format } from 'date-fns';
import UserPanel from '../UserPanel/UserPanel';
import css from './DailyInfo.module.css';
import AddWaterBtn from './AddWaterBtn';
import MonthInfo from '../MonthInfo/MonthInfo';
import WaterList from '../WaterListItem/WaterList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWaterByDay } from '../../redux/dailyInfoRedux/waterOperation';
import { setSelectedDate } from '../../redux/dailyInfoRedux/dailyInfoSlice';
import { userSlice } from '../../redux/dailyInfoRedux/userSlice';

const DailyInfo = () => {
  const dispatch = useDispatch();

  const selectedDate = useSelector((state) => state.dailyInfo.selectedDate);
  //user
  const userName = useSelector(userSlice.selectors.name);
  const avatarUrl = useSelector(userSlice.selectors.avatar);
  const handleClick = (date) => {
    dispatch(fetchWaterByDay({ date }));
  };

  useEffect(() => {
    if (selectedDate) {
      dispatch(fetchWaterByDay({ date: selectedDate }));
    }
  }, [selectedDate, dispatch]);

  return (
    <div className={css.main_daily_container}>
      <div className={css.user_container}>
        <UserPanel userName={userName} userAvatarUrl={avatarUrl} />
      </div>

      <div className={css.daily_info_container}>
        <div className={css.date}>
          {selectedDate
            ? format(selectedDate, 'dd, MMMM')
            : `Today ${format(new Date(), 'dd MMMM')}`}
        </div>
        <AddWaterBtn onSelectedDate={handleClick} />
      </div>
      <div className={css.water_list}>
        <WaterList onSelectedDate={handleClick} />
      </div>
      <MonthInfo
        selectedDate={selectedDate}
        onDateClick={(date) =>
          dispatch(fetchWaterByDay({ date: date.toISOString() }))
        }
        updateSelectedDate={(date) =>
          dispatch(setSelectedDate(date.toISOString()))
        }
      />
    </div>
  );
};

export default DailyInfo;
