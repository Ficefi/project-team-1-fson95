import { useDispatch, useSelector } from 'react-redux';
import WaterItem from './WaterItem.jsx';
import css from './WaterListItem.module.css';
import { selectWaterRecords } from '../../redux/dailyInfoRedux/waterSelector.js';
import { deleteWater } from '../../redux/dailyInfoRedux/waterOperation.js';

export default function WaterList() {
  const dispatch = useDispatch();
  const waterData = useSelector(selectWaterRecords);

  const handleDelete = (id) => {
    dispatch(deleteWater(id));
  };

  return (
    <div className={css.scroller}>
      <div className={css.water_list}>
        {waterData.map((item) => (
          <WaterItem
            key={item.id}
            id={item.id}
            dose="50"
            date={new Date(item.date)}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
