import css from './DailyInfo.module.css';
import sprite from '../../assets/svg/sprite.svg';
import { useCallback, useState } from 'react';
import WaterModal from '../Modals/WaterModal/WaterModal';

const AddWaterBtn = () => {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const [typeOperation, setTypeOperation] = useState('addWater');

  const openModal = (type) => {
    setTypeOperation(type);
    setIsOpenModal(true);
  };
  const close = useCallback(() => {
    setIsOpenModal(false);
  }, []);
  return (
    <>
      <div
        className={css.add_water_container}
        onClick={() => openModal('addWater')}
      >
        <div className={css.icon_add_water_btn}>
          <svg className={css.icon_add_water}>
            <use href={`${sprite}#icon-plus`}></use>
          </svg>
        </div>

        <span>Add water</span>
      </div>

      <WaterModal
        typeOperation={typeOperation}
        isOpen={isModalOpen}
        onClose={close}
      />
    </>
  );
};

export default AddWaterBtn;
