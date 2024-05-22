import { useDispatch } from 'react-redux';
import CustomModal from '../CustomModal/CustomModal';
import css from './DeleteWaterModal.module.css';
import { deleteWater } from '../../../redux/water/waterOperation';

const DeleteWaterModal = ({ isOpen, onClose, _id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteWater(_id));
    onClose();
  };
  return (
    <>
      <CustomModal isOpen={isOpen} onClose={onClose}>
        <h4 className={css.delete_header}>Delete entry</h4>
        <p className={css.delete_text}>
          Are you sure you want to delete the entry?
        </p>
        <div className={css.btn_container}>
          <button className={css.delete_button} onClick={handleDelete}>
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
