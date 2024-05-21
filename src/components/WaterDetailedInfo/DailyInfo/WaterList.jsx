//WaterList.jsx

import WaterItem from '../../WaterItem/WaterItem.jsx';
import css from './DailyInfo.module.css';

export default function WaterList() {
  const waterData = [
    {
      dose: 250,
      date: new Date('2024-05-11'),
    },
    {
      dose: 350,
      date: new Date('2024-05-11'),
    },
    {
      dose: 150,
      date: new Date('2024-05-12'),
    },
    {
      dose: 200,
      date: new Date('2024-05-12'),
    },
    {
      dose: 250,
      date: new Date('2024-05-12'),
    },
    {
      dose: 350,
      date: new Date('2024-05-11'),
    },
    {
      dose: 150,
      date: new Date('2024-05-12'),
    },
    {
      dose: 200,
      date: new Date('2024-05-12'),
    },
    {
      dose: 250,
      date: new Date('2024-05-12'),
    },
  ];
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
