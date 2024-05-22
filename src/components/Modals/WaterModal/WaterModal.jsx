import css from './WaterModal.module.css';

import CustomModal from '../CustomModal/CustomModal';
import WaterForm from '../WaterForm/WaterForm';

export const WaterModal = ({
  typeOperation,
  isOpen,
  onClose,
  onSubmit,
  defaultValues,
}) => {
  return (
    <>
      <CustomModal isOpen={isOpen} onClose={onClose}>
        <div>
          {typeOperation === 'addWater' ? (
            <div className={css.box_title}>
              <h2 className={css.title}>Add Water</h2>
              <h3 className={css.subtitle}>Choose a value</h3>
            </div>
          ) : (
            <div className={css.box_title}>
              <h2 className={css.title}>Edit the entered amount of water</h2>
              <h3 className={css.subtitle}>Correct entered data:</h3>
            </div>
          )}
          <WaterForm
            onSubmit={onSubmit}
            defaultValues={defaultValues}
            onClose={onClose}
          />
        </div>
      </CustomModal>
    </>
  );
};
export default WaterModal;
