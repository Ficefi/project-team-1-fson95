import { useSelector } from 'react-redux';
import DailyInfo from '../DailyInfo/DailyInfo';
import UserPanel from '../UserPanel/UserPanel';
import MonthInfo from './MonthInfo/MonthInfo';
import css from './WaterDetailedInfo.module.css';
import { selectWaterRecords } from '../../redux/water/waterSelector';
import { setSelectedDate } from '../../redux/dailyInfo/dailyInfoSlice';

const WaterDetailedInfo = () => {
  const waterData = useSelector(selectWaterRecords);

  return (
    <div className={css.container_WaterDetailedInfo}>
      <UserPanel />
      <DailyInfo />
      <MonthInfo
        waterData={waterData}
        selectedDate={setSelectedDate}
        initialSelectedDate={new Date()}
      />
    </div>
  );
};

export default WaterDetailedInfo;
