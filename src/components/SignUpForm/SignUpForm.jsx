import css from './SignUpForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
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
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const repeatPasswordFieldId = useId();

  const handleSubmit = (values, actions) => {
    //
    //
    //
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegisterSchema}
    >
      <Form className={css.signUpFields}>
        <div className={css.signUpFormInput}>
          <label htmlFor={emailFieldId} className={css.fieldText}>
            Email
          </label>
          <Field
            type="text"
            name="email"
            id={emailFieldId}
            placeholder="Enter your email"
            className={css.inputField}
          />
          <ErrorMessage
            name="email"
            component="span"
            className={css.errMessage}
          />
        </div>
        <div className={css.signUpFormInput}>
          <label htmlFor={passwordFieldId} className={css.fieldText}>
            Password
          </label>
          <Field
            type="password"
            name="password"
            id={passwordFieldId}
            placeholder="Enter your password"
            className={css.inputField}
          />
          <ErrorMessage
            name="password"
            component="span"
            className={css.errMessage}
          />
        </div>
        <div className={css.signUpFormInput}>
          <label htmlFor={repeatPasswordFieldId} className={css.fieldText}>
            Repeat password
          </label>
          <Field
            type="password"
            name="repeatPassword"
            id={repeatPasswordFieldId}
            placeholder="Repeat password"
            className={css.inputField}
          />
          <ErrorMessage
            name="repeatPassword"
            component="span"
            className={css.errMessage}
          />
        </div>
        <button type="submit" className={css.signUpBtn}>
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
