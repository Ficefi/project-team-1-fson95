import css from './SignUpPage.module.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';
const SignUpPage = () => {
  return (
    <div className={css.container}>
      <Logo />
      <div className={css.signUpContainer}>
        <h1 className={css.title}>Sign Up</h1>
        <SignUpForm />
      </div>
      <p className={css.text}>
        Already have account? <a href="/login">Sign In</a>
      </p>
    </div>
  );
};

export default SignUpPage;
