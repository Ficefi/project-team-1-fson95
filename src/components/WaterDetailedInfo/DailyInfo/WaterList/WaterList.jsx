//WaterList.jsx
import { useSelector } from 'react-redux';
import { selectWaterList } from '../../../../redux/water/selectors';
import WaterItem from './WaterItem/WaterItem';
import css from './WaterList.module.css';

export default function WaterList() {
  const waterData = useSelector(selectWaterList);
  console.log(waterData);
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
