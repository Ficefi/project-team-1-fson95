import css from './SignInPage.module.css';
import SignInForm from '../../components/SignInForm/SignInForm';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import Logo from '../../components/Logo/Logo';
import { Link } from 'react-router-dom';

const SignInPage = () => {
  return (
    <div className={css.mainContainer}>
      <div className={css.container}>
        <Logo />
        <div className={css.signInContainer}>
          <h1 className={css.title}>Sign In</h1>
          <SignInForm />
        </div>
        <p className={css.text}>
          Don’t have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
      <div className={css.AdvantagesSectionContainer}>
        <AdvantagesSection />
      </div>
    </div>
  );
};

export default SignInPage;

<Link to="/register" className={css.signUpBtn}>
  Try tracker
</Link>;
