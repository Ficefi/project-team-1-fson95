import React from 'react';
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameDay,
  isSameMonth,
  subMonths,
  addMonths,
} from 'date-fns';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import css from './MonthInfo.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSelectedDate,
  setSelectedDate,
} from '../../redux/dailyInfo/dailyInfoSlice';

const MonthInfo = () => {
  const selectedDate = useSelector(selectSelectedDate);
  const getHeader = () => {
    return (
      <div>
        <div
          className="todayButton"
          onClick={() => {
            setSelectedDate(new Date());
          }}
        ></div>
        <h2 className="currentMonth">{format(selectedDate, 'MMMM yyyy')}</h2>
      </div>
    );
  };
  const dispatch = useDispatch();
  const generateDatesForCurrentWeek = (date) => {
    let currentDate = date;
    const week = [];

    for (let day = 0; day < 7; day++) {
      const cloneDate = currentDate;
      if (isSameMonth(currentDate, selectedDate)) {
        week.push(
          <div key={cloneDate.toString()}>
            <button
              className={clsx(css.btnday, {
                [css.selectedDate]: isSameDay(currentDate, selectedDate),
              })}
              onClick={() => {
                dispatch(setSelectedDate(cloneDate));
              }}
            >
              {isSameMonth(currentDate, selectedDate)
                ? format(currentDate, 'd')
                : ''}
            </button>
            <p className={css.completed}>100%</p>
          </div>
        );
      }
      currentDate = addDays(currentDate, 1);
    }
    return <React.Fragment key={currentDate}>{week}</React.Fragment>;
  };

  const getDates = () => {
    const startOfTheSelectedMonth = startOfMonth(selectedDate);
    const endOfTheSelectedMonth = endOfMonth(selectedDate);
    const startDate = startOfWeek(startOfTheSelectedMonth);
    const endDate = endOfWeek(endOfTheSelectedMonth);

    let currentDate = startDate;
    const allWeeks = [];

    while (currentDate <= endDate) {
      allWeeks.push(generateDatesForCurrentWeek(currentDate));
      currentDate = addDays(currentDate, 7);
    }

    return (
      <>
        <div key={allWeeks.toString()} className={css.weekContainer}>
          {allWeeks}
        </div>
      </>
    );
  };

  // const [waterRate, setWaterRate] = useState('');
  // const state = useSelector((state) => state);
  // const token = getPersistedToken(state);

  // useEffect(() => {
  //   const fetchWaterRate = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://aquatrack-api.onrender.com/users/current',
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       // const data = await response.json();
  //       // setWaterRate(data.waterRate);
  //     } catch (error) {
  //       console.error('Error fetching water rate:', error);
  //     }
  //   };

  //   fetchWaterRate();
  // }, []);

  return (
    <div className={css.section}>
      <div className={css.block}>
        <div className={css.container}>
          <div className={css.blockinfomonth}>
            <h2 className={css.monthtitle}>Month</h2>
            <div className={css.changermonth}>
              <AiOutlineLeft
                className={css.navicon}
                onClick={() => setSelectedDate(subMonths(selectedDate, 1))}
              />
              <span className={css.monthname}>{getHeader()}</span>
              <AiOutlineRight
                className={css.navicon}
                onClick={() => setSelectedDate(addMonths(selectedDate, 1))}
              />
            </div>
          </div>
        </div>
        <div className={css.blockdays}>{getDates()}</div>
      </div>
    </div>
  );
};

export default MonthInfo;
