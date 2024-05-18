import css from './WaterForm.module.css';
import { BiMinus } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const waterSchema = Yup.object().shape({
  waterMl: Yup.number()
    .required('Required')
    .positive('Water amount must be positive'),
});

const WaterForm = () => {
  const { handleSubmit } = useForm({
    resolver: yupResolver(waterSchema),
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

  return (
    <form className={css.form} onSubmit={handleSubmit()} autoComplete="off">
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
        <label htmlFor="appt" className={css.box_select_text}>
          Recording time:
        </label>
        <input
          type="time"
          className={css.input_time}
          id="appt"
          name="appt"
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
          name="waterMl"
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
