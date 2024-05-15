import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import MonthInfo from '../../components/MonthInfo/MonthInfo';
import css from './TrackerPage.module.css';

const TrackerPage = () => {
  return (
    <div className={css.tracker_container}>
      <WaterMainInfo />
      <MonthInfo />
    </div>
  );
};

export default TrackerPage;
