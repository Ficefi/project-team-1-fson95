import css from './WaterDailyNorma.module.css';

function WaterDailyNorma() {
  const dailyNorma = '1.5 L';

  return (
    <div className={css.waterDailyNormaContainer}>
      <div className={css.waterDailyNormaText}>
        <h6 className={css.waterDailyNormaValue}>{dailyNorma}</h6>
        <p className={css.waterDailyNormaTitle}>My daily norma</p>
      </div>
    </div>
  );
}

export default WaterDailyNorma;
