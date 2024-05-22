import * as Yup from 'yup';

export const schema = Yup.object().shape({
  avatar: Yup.mixed(),
  gender: Yup.string().required('Gender is required'),
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  weight: Yup.number()
    .required('Weight is required')
    .min(0, 'Weight must be positive'),
  time: Yup.number()
    .required('Time is required')
    .min(0, 'Time must be positive'),
  waterRate: Yup.number()
    .required('Water rate is required')
    .min(0, 'Water rate must be positive'),
});