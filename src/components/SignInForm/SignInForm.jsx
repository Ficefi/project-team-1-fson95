import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/operations';
import { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import css from './SignInForm.module.css';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: initialValues,
    mode: 'onChange',
  });

  const onSubmit = (values) => {
    dispatch(
      signIn({
        email: values.email,
        password: values.password,
      })
    );
    reset();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.signInFields}>
      <div className={css.signInFormInput}>
        <label htmlFor={emailFieldId} className={css.fieldText}>
          Email
        </label>
        <input
          type="text"
          id={emailFieldId}
          placeholder="Enter your email"
          className={`${css.inputField} ${
            errors.email ? css.inputFieldError : ''
          }`}
          {...register('email')}
        />
        {errors.email && (
          <span className={css.errMessage}>{errors.email.message}</span>
        )}
      </div>
      <div className={css.signInFormInput}>
        <label htmlFor={passwordFieldId} className={css.fieldText}>
          Password
        </label>
        <input
          type={showPassword ? 'text' : 'password'}
          id={passwordFieldId}
          placeholder="Enter your password"
          className={`${css.inputField} ${
            errors.password ? css.inputFieldError : ''
          }`}
          {...register('password')}
        />
        <button
          type="button"
          className={css.togglePasswordBtn}
          onClick={togglePasswordVisibility}
        >
          <svg className={css.eyeIcon} width="20" height="20">
            <use
              href={`/src/assets/svg/sprite.svg#${
                showPassword ? 'icon-eye' : 'icon-eye-off'
              }`}
            ></use>
          </svg>
        </button>
        {errors.password && (
          <span className={css.errMessage}>{errors.password.message}</span>
        )}
      </div>

      <button type="submit" className={css.signInBtn}>
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
