import css from './DailyInfo.module.css';
import sprite from '../../assets/svg/sprite.svg';

const AddWaterBtn = () => {
  return (
    <div className={css.add_water_container}>
      <div className={css.icon_add_water_btn}>
        <svg className={css.icon_add_water}>
          <use href={`${sprite}#icon-plus`}></use>
        </svg>
      </div>

      <span>Add water</span>
    </div>
  );
};

export default AddWaterBtn;
