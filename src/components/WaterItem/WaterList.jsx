import { useSelector } from 'react-redux';
import WaterItem from './WaterItem.jsx';
import css from './WaterItem.module.css';
import { selectWaterRecords } from '../../redux/water/waterSelector.js';

export default function WaterList() {
  const waterData = useSelector(selectWaterRecords);
  return (
    <div className={css.scroller}>
      <div className={css.water_list}>
        {waterData.map((item) => (
          <WaterItem
            key={item._id}
            _id={item._id}
            consumedVolume={item.consumedVolume}
            date={new Date(item.date)}
          />
        ))}
      </div>
    </div>
  );
}
