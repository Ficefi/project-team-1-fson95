import { ButtonContainer, ModalBox } from './DeleteWaterModal.styled';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ModalContainer from '../ModalContainer/ModalContainer'; //це компонент для рендерингу модального вікна.
import { useDispatch } from 'react-redux'; //Хук useDispatch используется для получения функции отправки из хранилища Redux.
import { deleteDrinkThunk } from '../../store/water/waterOperations'; //це засіб створення дій, імпортований з ../../store/water/waterOperations.

// Компонент DeleteWaterModal отримує три реквізити:
// 1) onModalClose: функція, яка буде викликатися,
//   коли модальне вікно має бути зачиненим.
// 2) isModalOpen: логічне значення, що вказує,
//   чи має модальне вікно бути відкритим чи ні.
// 3) currentIntakes:об'єкт, що представляє поточну
//   запис про водозабір, що підлягає видаленню.

const DeleteWaterModal = ({ onModalClose, isModalOpen, currentIntakes }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    // Витягує властивість ID з об'єкта currentIntakes.
    // Відправляє дію deleteDrinkThunk з ідентифікатором як аргумент.
    // Викликає функцію onModalClose, щоб закрити модальне вікно.

    const data = currentIntakes.id;

    dispatch(deleteDrinkThunk(data));
    onModalClose();
  };

  return (
    <>
      {isModalOpen && (
        <ModalContainer onClose={onModalClose}>
          <ModalBox>
            <div>
              <div className="popular">
                <h2>Delete entry</h2>
                <CloseOutlinedIcon className="close" onClick={onModalClose} />
              </div>
              <p>Are you sure you want to delete the entry?</p>
            </div>
            <ButtonContainer>
              <button className="confirm" onClick={handleDelete}>
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

// Цей компонент відображає модальне діалогове вікно з повідомленням про підтвердження
// та двома кнопками: «Видалити» та «Скасувати».
// При натисканні кнопки "Видалити" він відправляє дію Redux (deleteDrinkThunk) з
// ідентифікатором поточного запису про паркан води, а потім закриває модальне вікно.
// Кнопка "Скасувати" просто закриває модальне вікно без виконання будь-якого видалення.
