import { useState } from 'react';
import UserSettingsModal from '../Modals/UserSettingsModal/UserSettingsModal';

export const Settings = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleSettingModal = () => {
    setIsOpenModal((prevState) => {
      const newState = !prevState;
      document.body.style.overflow = newState ? 'hidden' : '';
      return newState;
    });
  };

  return (
    <div>
      <button
        onClick={toggleSettingModal}
        style={{
          fontSize: '50px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          cursor: 'pointer',
        }}
      >
        UserSettingsModal
      </button>
      <UserSettingsModal isOpen={isOpenModal} isClose={toggleSettingModal} />
    </div>
  );
};
