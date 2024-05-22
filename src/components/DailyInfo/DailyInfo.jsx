// DailyInfo.jsx
import { useEffect } from 'react';
import { format } from 'date-fns';
import css from './DailyInfo.module.css';
import AddWaterBtn from './AddWaterBtn';
import WaterList from '../WaterItem/WaterList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWaterByDay } from '../../redux/water/waterOperation';

const DailyInfo = () => {
  const dispatch = useDispatch();

  const selectedDate = useSelector((state) => state.dailyInfo.selectedDate);
  //user

  const handleClick = (date) => {
    dispatch(fetchWaterByDay({ date }));
  };

  useEffect(() => {
    if (selectedDate) {
      dispatch(fetchWaterByDay({ date: selectedDate }));
    }
  }, [selectedDate, dispatch]);

  return (
    <div>
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
    </div>
  );
};

export default DailyInfo;
