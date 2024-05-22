import { useDispatch, useSelector } from 'react-redux';
import WaterItem from './WaterItem.jsx';
import css from './WaterItem.module.css';
import { useEffect } from 'react';
import { selectWaterRecords } from '../../redux/water/waterSelector.js';
import {
  fetchWaterByDay,
  updateWater,
} from '../../redux/water/waterOperation.js';

export default function WaterList() {
  const dispatch = useDispatch();
  const waterData = useSelector(selectWaterRecords);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    dispatch(fetchWaterByDay({ date: today }));
  }, [dispatch]);

  const updateWaterData = () => {
    dispatch(updateWater({}));
  };

  return (
    <div className={css.scroller}>
      <div className={css.water_list}>
        {waterData.map((item) => (
          <WaterItem
            key={item._id}
            _id={item._id}
            dose={item.consumedVolume}
            date={new Date(item.date)}
            updateWaterData={updateWaterData}
          />
        ))}
      </div>
    </div>
  );
}
