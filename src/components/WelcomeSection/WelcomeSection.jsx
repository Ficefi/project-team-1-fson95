import css from './WelcomeSection.module.css';
import Logo from '../Logo/Logo';

const WelcomeSection = () => {
  return (
    <div className={css.container}>
      <Logo />
      <h2 className={css.subtitle}>Record daily water intake and track</h2>
      <h1 className={css.title}>Water consumption tracker</h1>
      <div className={css.btnContainer}>
        <a href="/register" className={css.signUpBtn}>
          Try tracker
        </a>
        <a href="/login" className={css.signInBtn}>
          Sign In
        </a>
      </div>
    </div>
  );
};
export default WelcomeSection;
