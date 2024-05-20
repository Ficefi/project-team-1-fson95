import UserPanel from './UserPanel/UserPanel';
import DailyInfo from './DailyInfo/DailyInfo';
import MonthInfo from './MonthInfo/MonthInfo';

const WaterDetailedInfo = () => {
  return (
    <div>
      <UserPanel />
      <DailyInfo />
      <MonthInfo />
    </div>
  );
};

export default WaterDetailedInfo;
