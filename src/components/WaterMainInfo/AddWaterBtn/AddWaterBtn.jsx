import css from './AddWaterBtn.module.css';
import { FiPlus } from 'react-icons/fi';

function AddWaterBtn() {
  return (
    <div className={css.addWaterBtnContainer}>
      <button className={css.addWater_btn} type="button">
        <FiPlus />
        Add water
      </button>
    </div>
  );
}

export default AddWaterBtn;
