import { useSelector } from 'react-redux';
import css from './WaterDailyNorma.module.css';
import { selectWaterRate } from '../../../redux/water/selectors';

function WaterDailyNorma() {
  const waterRate = useSelector(selectWaterRate);
  return (
    <div className={css.waterDailyNormaContainer}>
      <div className={css.waterDailyNormaText}>
        <h6 className={css.waterDailyNormaValue}>
          {waterRate ? `${waterRate / 1000} L` : '0 L'}
        </h6>

        <p className={css.waterDailyNormaTitle}>My daily norma</p>
      </div>
    </div>
  );
}

export default WaterDailyNorma;
