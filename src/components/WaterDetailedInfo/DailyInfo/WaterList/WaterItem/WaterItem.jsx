import { useState } from 'react';
import DeleteWaterModal from '../../../../Modals/DeleteWaterModal/DeleteWaterModal';
import WaterModal from '../../../../Modals/WaterModal/WaterModal';
import sprite from '../../../../../../public/svg/sprite.svg';
import css from '../WaterList.module.css';

export default function WaterItem({ _id, consumedVolume, date }) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`;

  //open modal
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

  return (
    <div className={css.water_card_container}>
      <svg className={css.water_icon}>
        <use href={`${sprite}#icon-water-glass`}></use>
      </svg>
      <div className={css.info}>
        <div className={css.dose}>
          {consumedVolume >= 1000
            ? `${(consumedVolume / 1000).toFixed(2)} L`
            : `${consumedVolume} ml`}
        </div>
        <div className={css.date}>{formattedTime} AM</div>
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
          data={{ _id, consumedVolume, date }}
          typeOperation="editWater"
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
      {isModalOpen && modalType === 'deleteWater' && (
        <DeleteWaterModal isOpen={isModalOpen} onClose={closeModal} _id={_id} />
      )}
    </div>
  );
}
