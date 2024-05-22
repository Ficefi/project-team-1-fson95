import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import css from './WaterForm.module.css';
import { BiMinus } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { addWater } from '../../../redux/water/waterOperation';

const waterSchema = Yup.object().shape({
  consumedVolume: Yup.number()
    .required('Required')
    .positive('Water amount must be positive'),
  time: Yup.string().required(),
});

const WaterForm = () => {
  const dispatch = useDispatch();

  const { handleSubmit, setValue, register, watch } = useForm({
    resolver: yupResolver(waterSchema),
    defaultValues: {
      consumedVolume: 50,
      time: new Date().getHours(),
    },
  });
  const consumedVolume = watch('consumedVolume');
  const plusWater = () => {
    setValue('consumedVolume', consumedVolume + 50);
  };
  const minusWater = () => {
    const newValue = consumedVolume - 50;
    setValue('consumedVolume', newValue < 0 ? 0 : newValue);
  };
  const onSubmit = (data) => {
    dispatch(addWater(data));
  };
  return (
    <form
      className={css.form}
      onSubmit={handleSubmit(onSubmit, (e) => console.log(e))}
      autoComplete="off"
    >
      <div className={css.box_amount}>
        <p className={css.box_amount_text}>Amount of water:</p>
        <div className={css.box_button}>
          <button
            type="button"
            onClick={minusWater}
            className={css.button_amount}
          >
            <BiMinus size="19" />
          </button>
          <p className={css.box_button_text}>{consumedVolume} ml</p>
          <button
            type="button"
            onClick={plusWater}
            className={css.button_amount}
          >
            <AiOutlinePlus size="19" />
          </button>
        </div>
      </div>
      <div className={css.box_select}>
        <label htmlFor="appt" className={css.box_select_text}>
          Recording time:
        </label>
        <input
          type="time"
          className={css.input_time}
          id="appt"
          {...register('time')}
          min="09:00"
          max="18:00"
          required
        />
      </div>
      <div className={css.box_input}>
        <label className={css.input_title}>
          Enter the value of water used:
        </label>
        <input
          type="number"
          step="50"
          min="0"
          {...register('consumedVolume')}
          className={css.input}
          autoFocus
        />
      </div>
      <button type="submit" className={css.btn}>
        Save
      </button>
    </form>
  );
};

export default WaterForm;
