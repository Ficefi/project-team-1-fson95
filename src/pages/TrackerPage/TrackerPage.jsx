import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import MonthInfo from '../../components/MonthInfo/MonthInfo';
import css from './TrackerPage.module.css';
import DailyInfo from '../../components/DailyInfo/DailyInfo';

const TrackerPage = () => {
  return (
    <div className={css.tracker_container}>
      <WaterMainInfo />
      <DailyInfo />
      <MonthInfo />
    </div>
  );
};

export default TrackerPage;
