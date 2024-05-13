import css from './SignInPage.module.css';
import SignInForm from '../../components/SignInForm/SignInForm';
import Logo from '../../components/Logo/Logo';

const SignInPage = () => {
  return (
    <div className={css.container}>
      <Logo />
      <div className={css.signInContainer}>
        <h1 className={css.title}>Sign In</h1>
        <SignInForm />
      </div>
      <p className={css.text}>
        Don’t have an account? <a href="/register">Sign Up</a>
      </p>
    </div>
  );
};

export default SignInPage;
