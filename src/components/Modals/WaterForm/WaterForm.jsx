import css from './WaterForm.module.css';
import { BiMinus } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { addWater, updateWater } from '../../../redux/water/operations';
import { toast } from 'react-toastify';

const waterSchema = Yup.object().shape({
  consumedVolume: Yup.number()
    .required('Required')
    .positive('Water amount must be positive'),
  time: Yup.string().required('Required'),
});

const WaterForm = ({ typeOperation, defaultValues, onClose }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(waterSchema),
    defaultValues,
  });

  const [waterSetValue, setWaterSetValue] = useState(50);

  const plusWater = () => {
    setWaterSetValue((someValue) => someValue + 50);
  };

  const minusWater = () => {
    if (waterSetValue > 0) {
      setWaterSetValue((someValue) => someValue - 50);
    }
  };

  const inputValueChange = (evt) => {
    const { value } = evt.target;
    setWaterSetValue(parseInt(value) || 0);
  };

  const submit = async (data) => {
    const newData = {
      consumedVolume: data.consumedVolume,
      time: data.time,
    };

    if (typeOperation !== 'addWater') {
      await dispatch(addWater(newData));
      toast.success('Added, cool!');
    } else {
      await dispatch(updateWater({ _id: defaultValues._id, ...newData }));
      toast.success('Updated, cool!');
    }
    onClose();
  };

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit(submit)}
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
          <p className={css.box_button_text}>{waterSetValue} ml</p>
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
        <label htmlFor="time" className={css.box_select_text}>
          Recording time:
        </label>
        <input
          type="time"
          className={css.input_time}
          id="time"
          name="time"
          {...register('time')}
          required
        />
      </div>
      <div className={css.box_input}>
        <label className={css.input_title}>
          Enter the value of water used:
        </label>
        <input
          type="number"
          name="consumedVolume"
          {...register('consumedVolume')}
          step="50"
          min="0"
          value={waterSetValue}
          className={css.input}
          autoFocus
          onChange={inputValueChange}
        />
      </div>
      <button type="submit" className={css.btn}>
        Save
      </button>
    </form>
  );
};

export default WaterForm;
