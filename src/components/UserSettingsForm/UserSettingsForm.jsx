import { useEffect, useState, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { MdOutlineFileUpload } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { updateUserSettings } from '../../redux/auth/operations';
import css from './UserSettingsForm.module.css';
import temp from '../../components/Modals/UserSettingsModal/image/12.jpg';
import { schema } from './schema';

const UserSettingsForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  const [avatarUrl, setAvatarUrl] = useState(userInfo.avatarUrl);
  const [avatarError, setAvatarError] = useState('');
  const [isAvatarFileValid, setAvatarFileValid] = useState(true);
  const avatarInputRef = useRef(null);

  useEffect(() => {
    setAvatarUrl(userInfo.avatarUrl);
  }, [userInfo.avatarUrl]);

  const handleAvatarChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 7 * 1024 * 1024) {
        setAvatarError('File size exceeds 7MB');
        setAvatarUrl(userInfo.avatarUrl);
        setAvatarFileValid(false);
      } else {
        const reader = new FileReader();
        reader.onload = () => {
          setAvatarUrl(reader.result);
        };
        reader.readAsDataURL(file);
        setAvatarError('');
        setAvatarFileValid(true);
        setFieldValue('avatar', file);
      }
    }
  };

  const initialValues = {
    avatar: '',
    gender: userInfo.gender || '',
    name: userInfo.name || userInfo.email.split('@')[0],
    email: userInfo.email || '',
    weight: userInfo.weight || 0,
    time: userInfo.time || 0,
    waterRate: userInfo.waterRate ? userInfo.waterRate / 1000 : 0,
  };

  const calculateWaterRate = (gender, weight, time) => {
    if (gender && weight && time) {
      return gender === 'female'
        ? weight * 0.03 + time * 0.4
        : weight * 0.04 + time * 0.6;
    }
    return 0;
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(updateUserSettings(values));
      closeModal(true);
    } catch (error) {
      console.error('Error updating user settings:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, setFieldValue, values }) => {
        useEffect(() => {
          const newWaterRate = calculateWaterRate(
            values.gender,
            values.weight,
            values.time
          );
          setFieldValue('waterRate', parseFloat(newWaterRate.toFixed(1)));
        }, [values.gender, values.weight, values.time, setFieldValue]);

        return (
          <Form
            className={css.form}
            action="/profile"
            method="put"
            encType="multipart/form-data"
          >
            <div className={`${css.wraperFormGroup} ${css.avatarContainer}`}>
              <div className={css.thumb}>
                <img
                  src={avatarUrl || temp}
                  alt="User avatar"
                  className={css.avatar}
                />
              </div>
              <label
                htmlFor="uploadInput"
                className={`${css.uploadLabel} ${css.uploadText}`}
              >
                <MdOutlineFileUpload />
                Upload a photo
                <input
                  id="uploadInput"
                  type="file"
                  className={css.avatarInput}
                  accept="image/*, .png, .jpg, .jpeg"
                  onChange={(event) => handleAvatarChange(event, setFieldValue)}
                  ref={avatarInputRef}
                  autoComplete="photo"
                />
              </label>
              {avatarError && <span className={css.error}>{avatarError}</span>}
            </div>
            <div className={css.wraperFormGroup}>
              <label className={css.accentLabel}>Your gender identity</label>
              <div className={css.formRatio}>
                <Field
                  id="female"
                  type="radio"
                  name="gender"
                  value="female"
                  autoComplete="gender"
                />
                <label htmlFor="female">Woman</label>
                <Field
                  id="male"
                  type="radio"
                  name="gender"
                  value="male"
                  autoComplete="gender"
                />
                <label htmlFor="male">Man</label>
              </div>
              <ErrorMessage
                name="gender"
                component="span"
                className={css.error}
              />
            </div>

            <div className={css.mainGrop}>
              <div>
                <div className={css.wraperFormGroup}>
                  <label htmlFor="name" className={css.accentLabel}>
                    Your name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className={css.input}
                    autoComplete="name"
                  />
                  <ErrorMessage
                    name="name"
                    component="span"
                    className={css.error}
                  />
                </div>
                <div className={css.wraperFormGroup}>
                  <label htmlFor="email" className={css.accentLabel}>
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className={css.input}
                    autoComplete="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className={css.error}
                  />
                </div>
                <div className={css.wraperFormGroup}>
                  <p className={css.infoTitle}>My daily norma</p>

                  <Field
                    name="waterRate"
                    type="number"
                    readOnly
                    className={css.input}
                  />

                  <p className={css.info}>Active time in hours</p>
                </div>
              </div>
              <div>
                <div className={css.wraperFormGroup}>
                  <label htmlFor="weight" className={css.label}>
                    Your weight in kilograms:
                  </label>
                  <Field
                    type="number"
                    name="weight"
                    className={css.input}
                    autoComplete="weight"
                  />
                  <ErrorMessage
                    name="weight"
                    component="span"
                    className={css.error}
                  />
                </div>
                <div className={css.wraperFormGroup}>
                  <label htmlFor="time" className={css.label}>
                    The time of active participation in sports:
                  </label>
                  <Field
                    type="number"
                    name="time"
                    className={css.input}
                    autoComplete="active-time"
                  />
                  <ErrorMessage
                    name="time"
                    component="span"
                    className={css.error}
                  />
                </div>
                <div className={css.wraperFormGroup}>
                  <p className={css.info}>
                    The required amount of water in liters per day:
                  </p>

                  <Field
                    name="waterRate"
                    type="number"
                    readOnly
                    className={css.input}
                  />

                  <ErrorMessage
                    name="waterRate"
                    component="span"
                    className={css.error}
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className={css.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving...' : 'Save'}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default UserSettingsForm;
