import { ButtonContainer, ModalBox } from './DeleteWaterModal.module.css';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ModalContainer from '../ModalContainer/ModalContainer';
import { useDispatch } from 'react-redux'; // для отримання функції надсилання зі сховища Redux.
import { deleteDrinkThunk } from '../../store/water/waterOperations'; //це засіб створення дій, імпортований з ../../store/water/waterOperations.

const DeleteWaterModal = ({ onModalClose, isModalOpen, currentIntakes }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    //Витягує властивість id з об'єкта currentIntakes.
    const data = currentIntakes.id;

    dispatch(deleteDrinkThunk(data)); //Відправляє дію deleteDrinkThunk з ідентифікатором як аргумент.
    onModalClose(); // закриває вікно
  };

  return (
    <>
      {isModalOpen && ( // що вказує, чи модальне вікно має бути відкритим чи ні.
        <ModalContainer onClose={onModalClose}>
          <ModalBox className="box">
            <div>
              <div className="popular">
                <h2>Delete entry</h2>
                <CloseOutlinedIcon className="close" onClick={onModalClose} />
              </div>
              <p>Are you sure you want to delete the entry?</p>
            </div>
            <ButtonContainer>
              <button className="delete" onClick={handleDelete}>
                Delete
              </button>
              <button className="cancel" onClick={onModalClose}>
                Cancel
              </button>
            </ButtonContainer>
          </ModalBox>
        </ModalContainer>
      )}
    </>
  );
};

export default DeleteWaterModal;

/*ButtonContainer із двома кнопками:
Кнопка "Видалити", яка при натисканні викликає функцію handleDelete.
Кнопка "Скасувати", яка при натисканні викликає функцію onModalClose.*/
/*Якщо isModalOpen має значення false, нічого не відображається.
Очікуваний результат: коли компонент DeleteWaterModal візуалізується 
з isModalOpen, встановленим на true, і currentIntakes, що містить 
дійсний запис водозабору, відобразиться модальне діалогове вікно із
 заголовком, повідомленням підтвердження та двома кнопками («Видалити» та «Скасувати»).
  Натискання кнопки «Видалити» надішле дію deleteDrinkThunk з ідентифікатором 
  поточного запису водозабору та закриє модальний режим. Натискання кнопки «Скасувати» 
  або піктограми закриття просто закриє модаль без жодного видалення.*/
