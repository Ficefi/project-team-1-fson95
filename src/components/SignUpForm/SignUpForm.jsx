import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/operations';
import { useId } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
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

  const emailFieldId = useId();
  const passwordFieldId = useId();
  const repeatPasswordFieldId = useId();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
    console.log(values);
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
          className={`${css.inputField} ${
            errors.email ? css.inputFieldError : ''
          }`}
          {...register('email')}
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
          type="password"
          id={passwordFieldId}
          placeholder="Enter your password"
          className={`${css.inputField} ${
            errors.password ? css.inputFieldError : ''
          }`}
          {...register('password')}
        />
        {errors.password && (
          <span className={css.errMessage}>{errors.password.message}</span>
        )}
      </div>
      <div className={css.signUpFormInput}>
        <label htmlFor={repeatPasswordFieldId} className={css.fieldText}>
          Repeat password
        </label>
        <input
          type="password"
          id={repeatPasswordFieldId}
          placeholder="Repeat password"
          className={`${css.inputField} ${
            errors.repeatPassword ? css.inputFieldRepeatPasswordError : ''
          }`}
          {...register('repeatPassword')}
        />
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
