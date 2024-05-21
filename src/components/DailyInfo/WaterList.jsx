//WaterList.jsx

import { testWaterDoses } from '../../assets/data.js';
import WaterItem from '../WaterItem/WaterItem.jsx';
import css from './DailyInfo.module.css';

export default function WaterList() {
  const waterData = testWaterDoses;
  return (
    <div className={css.scroller}>
      <div className={css.water_list}>
        {waterData.map((item, index) => (
          <WaterItem key={index} dose={item.dose} date={item.date} />
        ))}
      </div>
    </div>
  );
}
