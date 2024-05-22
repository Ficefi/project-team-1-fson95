import { useState } from 'react';
import css from './AddWaterBtn.module.css';
import { FiPlus } from 'react-icons/fi';
import WaterModal from '../../Modals/WaterModal/WaterModal';

function AddWaterBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.addWaterBtnContainer}>
      <button className={css.addWater_btn} type="button" onClick={openModal}>
        <FiPlus />
        Add water
      </button>
      <WaterModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default AddWaterBtn;
