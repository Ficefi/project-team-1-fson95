import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import css from './WaterForm.module.css';
import { BiMinus } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { addWater, updateWater } from '../../../redux/water/waterOperation';
import { selectSelectedDate } from '../../../redux/dailyInfo/dailyInfoSlice';
import { memo, useMemo } from 'react';
import { format } from 'date-fns';

const waterSchema = Yup.object().shape({
  consumedVolume: Yup.number()
    .required('Required')
    .positive('Water amount must be positive'),
  time: Yup.string().required(),
});

// date = '2024-01-10T18:00:00'
// time = '18:00:00'
// input = '18:00'

const defaultValues = {
  consumedVolume: 250,
};

const transformData = (data) => {
  const { date, consumedVolume = defaultValues.consumedVolume } = data;
  const time = format(new Date(date), 'HH:mm');
  return {
    consumedVolume,
    time,
  };
};

// consumedVolume, date
const WaterForm = ({ data, onSubmit }) => {
  const { handleSubmit, setValue, register, watch } = useForm({
    resolver: yupResolver(waterSchema),
    defaultValues: transformData(data),
  });
  const consumedVolume = watch('consumedVolume');
  const plusWater = () => {
    setValue('consumedVolume', consumedVolume + 50);
  };
  const minusWater = () => {
    const newValue = consumedVolume - 50;
    setValue('consumedVolume', newValue < 0 ? 0 : newValue);
  };
  return (
    <form
      className={css.form}
      onSubmit={handleSubmit(
        (updData) => {
          const { time, ...rest } = updData;
          const [hours, minutes] = time.split(':');
          const date = new Date(data.date);
          date.setHours(hours, minutes);
          onSubmit({ ...rest, date });
        },
        (e) => console.log(e)
      )}
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

export const UpdateWaterForm = memo(function UpdateWaterForm({
  data,
  onSuccess,
}) {
  const dispatch = useDispatch();
  const submit = async (updData) => {
    await dispatch(updateWater({ _id: data._id, ...updData }));
    onSuccess?.();
  };
  return <WaterForm data={data} onSubmit={submit} />;
});

export const CreateWaterForm = memo(function CreateWaterForm({ onSuccess }) {
  const selectedDate = useSelector(selectSelectedDate);
  const dispatch = useDispatch();
  const submit = async (data) => {
    await dispatch(addWater(data));
    onSuccess?.();
  };
  const date = useMemo(() => {
    const date = new Date(selectedDate);
    date.setHours(9, 0);
    return date;
  }, [selectedDate]);
  return <WaterForm data={{ date }} onSubmit={submit} />;
});
