// import React from 'react';

// Импортируем компонент ComponentIsModal из файла Modal/Modal.js
import ComponentIsModal from '../Modal/Modal';

// Импортируем иконку IconX из SVG-файла sprite.svg
import IconX from '../../image/sprite.svg';

import css from './LogOutModal.module.css';

// Импортируем операцию signout из файла operations.js в папке redux/auth
import { signout } from '../../redux/auth/operations.js';

// Импортируем хук useDispatch из react-redux для диспатчинга Redux-экшенов
import { useDispatch } from 'react-redux';

// Определяем функциональный компонент LogOutModal
export const LogOutModal = ({ isOpen, onClose }) => {
  // Получаем ссылку на функцию диспатчинга экшенов из Redux
  const dispatch = useDispatch();

  // Определяем функцию logOut для выхода из приложения
  const logOut = () => {
    // Диспатчим экшен signout для выхода из приложения
    dispatch(signout());
  };

  // Рендерим компонент
  return (
    <>
      {/* Рендерим компонент ComponentIsModal, передавая ему пропсы isOpen и onClose */}
      <ComponentIsModal isOpen={isOpen} onClose={onClose}>
        <div className={css.modalContent}>
          <div className={css.modalCaver}>
            {/* Кнопка для закрытия модального окна */}
            <button className={css.closeButton} onClick={onClose}>
              <svg className={css.iconClose}>
                {/* Используем иконку IconX из SVG-спрайта */}
                <use href={`${IconX}#IconX`}></use>
              </svg>
            </button>
            <h2 className={css.modalTitle}>Log out</h2>
            <p className={css.modalQuestion}>Do you really want to leave?</p>
            <div className={css.buttonContainer}>
              {/* Кнопка для выхода из приложения */}
              <button className={css.deleteButton} onClick={logOut}>
                Log out
              </button>
              {/* Кнопка для отмены выхода из приложения */}
              <button className={css.cancelButton} onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </ComponentIsModal>
    </>
  );
};

export default LogOutModal;
