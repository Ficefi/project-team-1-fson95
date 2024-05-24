// DailyInfo.jsx
import { useEffect } from 'react';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { getWaterConsumedByDay } from '../../../redux/water/operations';
// import { selectSelectedDate } from '../../redux/dailyInfo/dailyInfoSlice';
import css from './DailyInfo.module.css';
import AddWaterBtn from './AddWaterBtn';
import WaterList from './WaterList/WaterList';

const DailyInfo = () => {
  const dispatch = useDispatch();
  // const selectedDate = useSelector(selectSelectedDate);
  const selectedDate = new Date();

  useEffect(() => {
    if (selectedDate) {
      dispatch(getWaterConsumedByDay({ date: selectedDate }));
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

        <AddWaterBtn />
      </div>
      <div className={css.water_list}>
        <WaterList />
      </div>
    </div>
  );
};

export default DailyInfo;
