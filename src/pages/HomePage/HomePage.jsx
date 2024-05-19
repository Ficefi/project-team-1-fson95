import css from './HomePage.module.css';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import DailyInfo from '../../components/DailyInfo/DailyInfo';
const HomePage = () => {
  return (
    <div className={css.container}>
      <DailyInfo />
      <WelcomeSection />
      <AdvantagesSection />
    </div>
  );
};

export default HomePage;
