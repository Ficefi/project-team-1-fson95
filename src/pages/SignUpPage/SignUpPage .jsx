import css from './SignUpPage.module.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import Logo from '../../components/Logo/Logo';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div className={css.mainContainer}>
      <div className={css.container}>
        <Logo />
        <div className={css.signUpContainer}>
          <h1 className={css.title}>Sign Up</h1>
          <SignUpForm />
        </div>
        <p className={css.text}>
          Already have account? <Link to="/login">Sign In</Link>
        </p>
      </div>
      <div className={css.AdvantagesSectionContainer}>
        <AdvantagesSection />
      </div>
    </div>
  );
};
export default SignUpPage;
