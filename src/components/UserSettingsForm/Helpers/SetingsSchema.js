import * as yup from 'yup';
export const schema = yup.object().shape({
  avatar: yup.mixed(),
  gender: yup
    .string()
    .required('Gender is required')
    .oneOf(['male', 'female'], 'Gender must be either male or female'),
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(20, 'Name must be at most 20 characters'),
  email: yup.string().email('Invalid email').required('Email is required'),
  weight: yup
    .number()
    .required('Weight is required')
    .min(0, 'Weight must be a positive number'),
  activeTime: yup
    .number()
    .required('Sport time is required')
    .min(0, 'Active time must be a positive number')
    .positive('Active time must be a positive number'),
  goal: yup
    .number()
    .required('Water intake is required')
    .min(0, 'Water intake must be a positive number')
    .positive('Water intake must be a positive number'),
});