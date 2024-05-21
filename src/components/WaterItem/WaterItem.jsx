import css from './WaterItem.module.css';
import sprite from '../../assets/svg/sprite.svg';

export default function WaterItem({ dose, date }) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`;

  return (
    <div className={css.water_card_container}>
      <svg className={css.water_icon}>
        <use href={`${sprite}#icon-water-glass`}></use>
      </svg>
      <div className={css.info}>
        <div className={css.dose}>{dose} ml</div>
        <div className={css.date}>{formattedTime} AM</div>
      </div>
      <div className={css.btn}>
        <svg className={css.edit_icon}>
          <use href={`${sprite}#icon-edit`}></use>
        </svg>
        <svg className={css.trash_icon}>
          <use href={`${sprite}#icon-trash`}></use>
        </svg>
      </div>
    </div>
  );
}
