import AddWaterBtn from "./AddWaterBtn/AddWaterBtn";
import WaterDailyNorma from "./WaterDailyNorma/WaterDailyNorma";
import WaterProgressBar from "./WaterProgressBar/WaterProgressBar";
import css from "./WaterMainInfo.module.css";
function WaterMainInfo() {
  return (
    <div className={css.waterMainInfoContainer}>
      <h4 className={css.waterMainInfoTitle}>AquaTrack</h4>
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn />
    </div>
  );
}

export default WaterMainInfo;
