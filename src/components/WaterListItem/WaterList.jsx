import { useDispatch, useSelector } from 'react-redux';
import WaterItem from './WaterItem.jsx';
import css from './WaterListItem.module.css';
import { selectWaterRecords } from '../../redux/dailyInfoRedux/waterSelector.js';
import {
  fetchWaterByDay,
  fetchWaterByMonth,
  updateWater,
} from '../../redux/dailyInfoRedux/waterOperation.js';
import { useEffect, useState } from 'react';
import { selectIsWaterModalOpen } from '../../redux/dailyInfoRedux/dailyInfoSlice.js';
import MonthInfo from '../MonthInfo/MonthInfo.jsx';

export default function WaterList() {
  const dispatch = useDispatch();
  const waterData = useSelector(selectWaterRecords);
  const isMonthSelected = useSelector(selectIsWaterModalOpen);
  const [selectedMode, setSelectedMode] = useState('day');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const updateSelectedDate = (date) => {
    console.log('updateSelectedDate called with:', date);
    setSelectedDate(date);
  };

  useEffect(() => {
    if (isMonthSelected) {
      setSelectedMode('month');
      dispatch(
        fetchWaterByMonth({
          year: selectedDate.getFullYear(),
          month: selectedDate.getMonth() + 1,
        })
      );
    } else {
      setSelectedMode('day');
      const dateStr = selectedDate.toISOString().split('T')[0];
      dispatch(fetchWaterByDay({ date: dateStr }));
    }
  }, [dispatch, isMonthSelected, selectedDate]);

  const updateWaterData = () => {
    dispatch(updateWater({}));
  };

  return (
    <>
      <div className={css.scroller}>
        <div className={css.water_list}>
          {waterData.map((item) => (
            <WaterItem
              key={item._id}
              _id={item._id}
              dose={
                selectedMode === 'month'
                  ? item.totalConsumedWater
                  : item.consumedVolume
              }
              date={new Date(item.date)}
              updateWaterData={updateWaterData}
            />
          ))}
        </div>
      </div>
      <MonthInfo
        waterData={waterData}
        selectedDate={selectedDate}
        initialSelectedDate={new Date()}
        updateSelectedDate={updateSelectedDate}
      />
    </>
  );
}
