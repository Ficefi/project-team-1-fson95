import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MdOutlineFileUpload } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { updateUserSettings } from '../../redux/auth/operations';
import css from './UserSettingsForm.module.css';
import { schema } from './Helpers/SetingsSchema';
import temp from '../../components/Modals/UserSettingsModal/image/12.jpg';

const UserSettingsForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  const [avatarUrl, setAvatarUrl] = useState(userInfo.avatarUrl);
  const [userInfoUpdated, setUserInfoUpdated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [avatarError, setAvatarError] = useState('');
  const [isFileValid, setIsFileValid] = useState(true);
  const avatarInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      avatar: '',
      gender: '',
      name: '',
      email: '',
      weight: 0,
      activeTime: 0,
      goal: 0,
    },
  });

  useEffect(() => {
    if (userInfo && userInfo.email && !userInfoUpdated) {
      const { email, name, gender, weight, activeTime, goal } = userInfo;
      setValue('email', email);
      setValue('name', name || email.split('@')[0]);
      setValue('gender', gender || '');
      setValue('weight', weight || 0);
      setValue('activeTime', activeTime || 0);
      setValue('goal', goal ? goal / 1000 : 0);
      setUserInfoUpdated(true);
    }
  }, [userInfo, setValue, userInfoUpdated]);

  const gender = watch('gender');
  const weight = watch('weight');
  const activeTime = watch('activeTime');

  useEffect(() => {
    if (gender && weight && activeTime) {
      const setDailyNorma =
        gender === 'female'
          ? weight * 0.03 + activeTime * 0.4
          : weight * 0.04 + activeTime * 0.6;
      setValue('goal', parseFloat(setDailyNorma.toFixed(1)));
    }
  }, [gender, weight, activeTime, setValue]);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 7 * 1024 * 1024) {
        setAvatarError('File size exceeds 7MB');
        setAvatarUrl(userInfo.avatarUrl);
        setIsFileValid(false);
      } else {
        const reader = new FileReader();
        reader.onload = () => {
          setAvatarUrl(reader.result);
        };
        reader.readAsDataURL(file);
        setAvatarError('');
        setIsFileValid(true);
      }
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);

    const formData = new FormData();
    const file = avatarInputRef.current.files[0];
    if (file) {
      if (file.size > 7 * 1024 * 1024) {
        setAvatarError('File size exceeds 7MB');
        setLoading(false);
        return;
      } else {
        formData.append('avatar', file);
      }
    }

    formData.append('gender', data.gender);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('weight', data.weight);
    formData.append('activeTime', data.activeTime);
    formData.append('goal', data.goal * 1000);

    try {
      await dispatch(updateUserSettings(formData));
      closeModal(true);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setAvatarUrl(userInfo.avatarUrl);
  }, [userInfo.avatarUrl]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={css.form}
      action="/profile"
      method="put"
      encType="multipart/form-data"
    >
      <div className={`${css.formGroup} ${css.avatarContainer}`}>
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
            {...register('avatar')}
            className={css.avatarInput}
            accept="image/*, .png, .jpg, .jpeg"
            onChange={handleAvatarChange}
            ref={avatarInputRef}
            autoComplete="photo"
          />
        </label>
        {avatarError && <span className={css.error}>{avatarError}</span>}
      </div>
      <div className={css.formGroup}>
        <label className={css.accentLabel}>Your gender identity</label>
        <div className={css.formRatio}>
          <input
            type="radio"
            id="female"
            value="female"
            {...register('gender')}
            autoComplete="gender"
            defaultChecked
          />
          <label htmlFor="female">Woman</label>
          <input
            type="radio"
            id="male"
            value="male"
            {...register('gender')}
            autoComplete="gender"
          />
          <label htmlFor="male">Man</label>
        </div>
        {errors.gender && (
          <span className={css.error}>{errors.gender.message}</span>
        )}
      </div>

      <div className={css.mainGrop}>
        <div>
          <div className={css.formGroup}>
            <label htmlFor="email" className={css.accentLabel}>
              Your name
            </label>
            <input
              type="text"
              {...register('name')}
              className={css.input}
              id="name"
              autoComplete="name"
            />
            {errors.name && (
              <span className={css.error}>{errors.name.message}</span>
            )}
          </div>
          <div className={css.formGroup}>
            <label htmlFor="email" className={css.accentLabel}>
              Email
            </label>
            <input
              type="text"
              {...register('email')}
              className={css.input}
              id="email"
              autoComplete="email"
            />
            {errors.email && (
              <span className={css.error}>{errors.email.message}</span>
            )}
          </div>
          <div className={css.formGroup}>
            <p className={css.infoTitle}>My daily norma</p>
            <p className={css.calculation}>{watch('goal')}</p>
            <p className={css.info}>Active time in hours</p>
          </div>
        </div>
        <div>
          <div className={css.formGroup}>
            <label htmlFor="weight" className={css.label}>
              Your weight in kilograms:
            </label>
            <input
              type="number"
              min="0"
              id="weight"
              {...register('weight')}
              className={css.input}
              autoComplete="weight"
            />
            {errors.weight && errors.weight.type === 'typeError' && (
              <span className={css.error}>Weight is required</span>
            )}
          </div>
          <div className={css.formGroup}>
            <label htmlFor="activeTime" className={css.label}>
              The time of active participation in sports:
            </label>
            <input
              type="number"
              min="0"
              id="activeTime"
              {...register('activeTime')}
              className={css.input}
              autoComplete="active-time"
            />
            {errors.activeTime && errors.activeTime.type === 'typeError' && (
              <span className={css.error}>ActiveTime is required</span>
            )}
          </div>
          <div className={css.formGroup}>
            <p className={css.info}>
              The required amount of water in liters per day:
              {watch('goal') ? `${watch('goal')} L` : ''}
            </p>
          </div>
          <div className={css.formGroup}>
            <label htmlFor="goal" className={css.accentLabel}>
              Write down how much water you will drink:
            </label>
            <input
              type="number"
              id="goal"
              {...register('goal')}
              className={css.input}
              min="0"
              step="0.1"
              value={watch('goal')}
              autoComplete="goal"
            />
            {errors.goal && !watch('goal') && (
              <span className={css.error}>Goal is required</span>
            )}
          </div>
        </div>
      </div>
      <button type="submit" className={css.submitBtn} disabled={loading}>
        {loading ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
};

export default UserSettingsForm;
