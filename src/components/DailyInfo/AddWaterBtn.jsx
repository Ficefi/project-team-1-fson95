import css from './DailyInfo.module.css';
import sprite from '../../assets/svg/sprite.svg';
import { useState } from 'react';
import WaterModal from '../Modals/WaterModal/WaterModal';
import { useDispatch } from 'react-redux';
import { addWater } from '../../redux/water/waterOperation';

const AddWaterBtn = () => {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const [typeOperation, setTypeOperation] = useState('addWater');
  const dispatch = useDispatch();
  const openModal = (type) => {
    setTypeOperation(type);
    setIsOpenModal(true);
  };
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
        onSubmit={(data) => {
          dispatch(addWater(data));
          setIsOpenModal(false);
        }}
        typeOperation={typeOperation}
        isOpen={isModalOpen}
        onClose={() => setIsOpenModal(false)}
      />
    </>
  );
};

export default AddWaterBtn;
