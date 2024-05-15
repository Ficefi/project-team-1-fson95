import css from './WelcomeSection.module.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const WelcomeSection = () => {
  return (
    <div className={css.container}>
      <Logo />
      <h2 className={css.subtitle}>Record daily water intake and track</h2>
      <h1 className={css.title}>Water consumption tracker</h1>
      <div className={css.btnContainer}>
        <Link to="/register" className={css.signUpBtn}>
          Try tracker
        </Link>
        <Link to="/login" className={css.signInBtn}>
          Sign In
        </Link>
      </div>
    </div>
  );
};
export default WelcomeSection;
