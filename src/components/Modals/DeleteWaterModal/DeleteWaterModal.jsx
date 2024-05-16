import ComponentIsModal from '../ComponentIsModal/ComponentIsModal';

import WaterForm from '../WaterForm/WaterForm';
import IconX from '../../image/sprite.svg';
import css from './DeleteWaterModal.module.css';

export const DeleteWaterModal = ({ isOpen, isClose, onSubmit }) => {
  const handleDelete = () => {
    isClose();
  };

  return (
    <>
      <ComponentIsModal isOpen={isOpen} isClose={isClose}>
        <div className={css.modalContent}>
          <button className={css.closeButton} onClick={isClose}>
            <svg className={css.iconClose}>
              <use href={`${IconX}#IconX`}></use>
            </svg>
          </button>
          <h2 className={css.modalHead}>Delete entry</h2>
          <p className={css.modalInquiry}>
            Are you sure you want to delete the entry?
          </p>
          <div className={css.buttonContainer}>
            <button className={css.deleteButton} onClick={handleDelete}>
              Delete
            </button>
            <button className={css.cancelButton} onClick={isClose}>
              Cancel
            </button>
          </div>
          <WaterForm onSubmit={onSubmit} />
        </div>
      </ComponentIsModal>
    </>
  );
};

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
