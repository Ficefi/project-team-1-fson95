import AddWaterBtn from './AddWaterBtn/AddWaterBtn';
import WaterDailyNorma from './WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from './WaterProgressBar/WaterProgressBar';
import Logo from '../Logo/Logo';
import css from './WaterMainInfo.module.css';
function WaterMainInfo() {
  return (
    <div className={css.waterMainInfoContainer}>
      <Logo />
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn />
    </div>
  );
}

export default WaterMainInfo;
