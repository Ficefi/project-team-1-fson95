import css from './DailyInfo.module.css';
import sprite from '../../../../public/svg/sprite.svg';

import WaterModal from '../../Modals/WaterModal/WaterModal';
import { useCallback, useState } from 'react';

const AddWaterBtn = () => {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const typeOperation = 'addWater';

  const waterData = {
    consumedVolume: null,
    time: null,
  };

  const openModal = () => {
    setIsOpenModal(true);
  };
  const close = useCallback(() => {
    setIsOpenModal(false);
  }, []);
  return (
    <>
      <div className={css.add_water_container} onClick={() => openModal()}>
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
        defaultValues={waterData}
      />
    </>
  );
};

export default AddWaterBtn;
