import css from './WaterListItem.module.css';
import sprite from '../../assets/svg/sprite.svg';
import { useDispatch } from 'react-redux';
import { toggleWaterModal } from '../../redux/dailyInfoRedux/dailyInfoSlice';

export default function WaterItem({ id, dose, date, onDelete }) {
  const dispatch = useDispatch();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`;

  const handleEdit = () => {
    dispatch(toggleWaterModal());
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className={css.water_card_container}>
      <svg className={css.water_icon}>
        <use href={`${sprite}#icon-water-glass`}></use>
      </svg>
      <div className={css.info}>
        <div className={css.dose}>{dose} ml</div>
        <div className={css.date}>{formattedTime}</div>
      </div>
      <div className={css.btn}>
        <svg className={css.edit_icon} onClick={handleEdit}>
          <use href={`${sprite}#icon-edit`}></use>
        </svg>
        <svg className={css.trash_icon} onClick={handleDelete}>
          <use href={`${sprite}#icon-trash`}></use>
        </svg>
      </div>
    </div>
  );
}
