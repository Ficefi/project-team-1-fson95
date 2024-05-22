import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
import css from './TrackerPage.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentInfo } from '../../redux/auth/operations';

const TrackerPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentInfo());
  }, [dispatch]);

  return (
    <div className={css.tracker_container}>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
};

export default TrackerPage;
