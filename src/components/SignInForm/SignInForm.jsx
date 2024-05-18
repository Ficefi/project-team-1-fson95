import css from './SignInForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string().required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();

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
      validationSchema={LoginSchema}
    >
      <Form className={css.signInFields}>
        <div className={css.signInFormInput}>
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
        <div className={css.signInFormInput}>
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

        <button type="submit" className={css.signInBtn}>
          Sign In
        </button>
      </Form>
    </Formik>
  );
};

export default SignInForm;
