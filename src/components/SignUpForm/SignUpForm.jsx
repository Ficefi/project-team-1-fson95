import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/operations';
import { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import css from './SignUpForm.module.css';

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too short!').required('Required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const initialValues = {
  email: '',
  password: '',
  repeatPassword: '',
};

const SignUpForm = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [isFieldActivated, setIsFieldActivated] = useState({
    email: false,
    password: false,
    repeatPassword: false,
  });

  const emailFieldId = useId();
  const passwordFieldId = useId();
  const repeatPasswordFieldId = useId();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues: initialValues,
    mode: 'onChange',
  });

  const onSubmit = (values) => {
    dispatch(
      signUp({
        email: values.email,
        password: values.password,
      })
    );
    reset();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleActivate = (field) => {
    setIsFieldActivated({ ...isFieldActivated, [field]: !!getValues(field) });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.signUpFields}>
      <div className={css.signUpFormInput}>
        <label htmlFor={emailFieldId} className={css.fieldText}>
          Email
        </label>
        <input
          type="text"
          id={emailFieldId}
          placeholder="Enter your email"
          className={clsx(css.inputField, {
            [css.inputFieldError]: errors.email,
            [css.inputFieldActivated]: isFieldActivated.email,
          })}
          {...register('email')}
          onBlur={() => handleActivate('email')}
        />
        {errors.email && (
          <span className={css.errMessage}>{errors.email.message}</span>
        )}
      </div>
      <div className={css.signUpFormInput}>
        <label htmlFor={passwordFieldId} className={css.fieldText}>
          Password
        </label>
        <input
          type={showPassword ? 'text' : 'password'}
          id={passwordFieldId}
          placeholder="Enter your password"
          className={clsx(css.inputField, {
            [css.inputFieldError]: errors.password,
            [css.inputFieldActivated]: isFieldActivated.password,
          })}
          {...register('password')}
          onBlur={() => handleActivate('password')}
        />
        <button
          type="button"
          className={css.togglePasswordBtn}
          onClick={togglePasswordVisibility}
        >
          <svg className={css.eyeIcon} width="20" height="20">
            <use
              href={`/svg/sprite.svg#${
                showPassword ? 'icon-eye' : 'icon-eye-off'
              }`}
            ></use>
          </svg>
        </button>
        {errors.password && (
          <span className={css.errMessage}>{errors.password.message}</span>
        )}
      </div>
      <div className={css.signUpFormInput}>
        <label htmlFor={repeatPasswordFieldId} className={css.fieldText}>
          Repeat password
        </label>
        <input
          type={showPassword ? 'text' : 'password'}
          id={repeatPasswordFieldId}
          placeholder="Repeat password"
          className={clsx(css.inputField, {
            [css.inputFieldError]: errors.repeatPassword,
            [css.inputFieldActivated]: isFieldActivated.repeatPassword,
          })}
          {...register('repeatPassword')}
          onBlur={() => handleActivate('repeatPassword')}
        />
        <button
          type="button"
          className={css.togglePasswordBtn}
          onClick={togglePasswordVisibility}
        >
          <svg className={css.eyeIcon} width="20" height="20">
            <use
              href={`/svg/sprite.svg#${
                showPassword ? 'icon-eye' : 'icon-eye-off'
              }`}
            ></use>
          </svg>
        </button>
        {errors.repeatPassword && (
          <span className={css.errMessage}>
            {errors.repeatPassword.message}
          </span>
        )}
      </div>
      <button type="submit" className={css.signUpBtn}>
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
