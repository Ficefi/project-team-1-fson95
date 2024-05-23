import DailyInfo from '../DailyInfo/DailyInfo';
import UserPanel from '../UserPanel/UserPanel';
import css from './WaterDetailedInfo.module.css';
import MonthInfo from '../MonthInfo/MonthInfo';

const WaterDetailedInfo = () => {
  return (
    <div className={css.container_WaterDetailedInfo}>
      <UserPanel />
      <DailyInfo />
      <MonthInfo />
    </div>
  );
};

export default WaterDetailedInfo;
