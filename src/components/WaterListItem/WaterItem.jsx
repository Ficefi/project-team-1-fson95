import css from './WaterListItem.module.css';
import sprite from '../../assets/svg/sprite.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux'; // Додано імпорт
import DeleteWaterModal from '../Modals/DeleteWaterModal/DeleteWaterModal';
import WaterModal from '../../components/Modals/WaterModal/WaterModal';
import { updateWater } from '../../redux/dailyInfoRedux/waterOperation';

export default function WaterItem({ id, dose, date, onDelete }) {
  const dispatch = useDispatch(); // Отримання диспетчера Redux

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`;

  // open modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setIsModalOpen(true);
    setModalType(type);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  const handleEditSubmit = (formData) => {
    dispatch(updateWater(formData)); // Виклик updateWater з використанням диспетчера

    closeModal();
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
        <svg className={css.edit_icon} onClick={() => openModal('editWater')}>
          <use href={`${sprite}#icon-edit`}></use>
        </svg>
        <svg
          className={css.trash_icon}
          onClick={() => openModal('deleteWater')}
        >
          <use href={`${sprite}#icon-trash`}></use>
        </svg>
      </div>
      {isModalOpen && modalType === 'editWater' && (
        <WaterModal
          typeOperation="editWater"
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={handleEditSubmit}
        />
      )}
      {isModalOpen && modalType === 'deleteWater' && (
        <DeleteWaterModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onDelete={() => {
            onDelete(id);
            closeModal();
          }}
        />
      )}
    </div>
  );
}
