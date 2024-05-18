import css from './HomePage.module.css';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import UserSettingsModal from '../../components/Modals/UserSettingsModal/UserSettingsModal';

const HomePage = () => {
  return (
    <div className={css.container}>
      <UserSettingsModal isOpen={true} />
      <WelcomeSection />
      <AdvantagesSection />
    </div>
  );
};

export default HomePage;
