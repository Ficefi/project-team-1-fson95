import css from './HomePage.module.css';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import UserSettingsModal from '../../components/Modals/UserSettingsModal/UserSettingsModal';
import { Settings } from '../../components/UserSettingsForm/Setings';

const HomePage = () => {
  return (
    <div className={css.container}>
      {/* Проба для перевірки роботи модалки компонент <Settings /> показує 
      модалку UserSetingsModal*/}
      <Settings />
      <WelcomeSection />
      <AdvantagesSection />
    </div>
  );
};

export default HomePage;
