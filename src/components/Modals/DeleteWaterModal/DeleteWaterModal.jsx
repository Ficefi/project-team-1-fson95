import { useDispatch } from 'react-redux';
import { deleteWater } from '../../../redux/water/operations';
import CustomModal from '../CustomModal/CustomModal';
import css from './DeleteWaterModal.module.css';

const DeleteWaterModal = ({ isOpen, onClose, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <CustomModal isOpen={isOpen} onClose={onClose}>
        <h4 className={css.delete_header}>Delete entry</h4>
        <p className={css.delete_text}>
          Are you sure you want to delete the entry?
        </p>
        <div className={css.btn_container}>
          <button
            className={css.delete_button}
            onClick={() => dispatch(deleteWater(id))}
          >
            Delete
          </button>
          <button className={css.delete_button} onClick={onClose}>
            Cancel
          </button>
        </div>
      </CustomModal>
    </>
  );
};

export default DeleteWaterModal;
