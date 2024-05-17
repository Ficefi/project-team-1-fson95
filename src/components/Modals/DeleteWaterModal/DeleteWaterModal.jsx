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

/*
Компонент рендерить компонент ComponentIsModa<wbr>l, передаючи йому властивості isOpen і isClose.
Всередині ComponentIsModa<wbr>l відображається div з класом modalContent, який містить модальний вміст.
Кнопка закриття відображається за допомогою класу closeButton, який відображає піктограму SVG з
 імпорту IconX. Коли клацнути, викликається функція isClose, щоб закрити модаль.
Заголовок із класом modalHead відображає текст «Видалити запис».
Абзац із класом modalInquiry відображає запитання «Ви впевнені, що хочете видалити запис?».
Div із класом buttonContainer<wbr> містить дві кнопки:
Кнопка «Видалити» з класом deleteButton, яка викликає функцію handleDelete при натисканні.
Кнопка «Скасувати» з класом cancelButton, яка викликає функцію isClose, коли натискається.
Таким чином, цей компонент відображає модальне діалогове вікно з кнопкою закриття, заголовком,
 запитанням для підтвердження та двома кнопками («Видалити» та «Скасувати»). Кнопка «Видалити», ймовірно, запускає логіку видалення, а кнопка «Скасувати» та кнопка закриття відхиляють модаль. Компонент отримує властивості для керування видимістю модального елемента та функцію для його закриття.*/
