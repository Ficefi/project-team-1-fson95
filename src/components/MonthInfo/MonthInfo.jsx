import React, { useState } from 'react';
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  subMonths,
  addMonths,
  isSameDay
} from 'date-fns';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import css from './MonthInfo.module.css';
import sprite from '../../assets/svg/sprite.svg';
import clsx from 'clsx';

const MonthInfo = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeDate, setActiveDate] = useState(new Date());

  const getHeader = () => {
    return (
      <div>
        <div
          className="todayButton"
          onClick={() => {
            setSelectedDate(new Date());
            setActiveDate(new Date());
          }}
        ></div>
        <h2 className="currentMonth">{format(activeDate, 'MMMM yyyy')}</h2>
      </div>
    );
  };

  const generateDatesForCurrentWeek = (date, selectedDate, activeDate) => {
    let currentDate = date;
    const week = [];

    for (let day = 0; day < 7; day++) {
      const cloneDate = currentDate;
      if (isSameMonth(currentDate, activeDate)) {
        week.push(
          <div key={cloneDate.toString()}>
            <button
              className={clsx(css.btnday, {
                [css.selectedDate]: isSameDay(currentDate, selectedDate)
              })}
              onClick={() => {
                setSelectedDate(cloneDate);
              }}
            >
              {isSameMonth(currentDate, activeDate)
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
    const startOfTheSelectedMonth = startOfMonth(activeDate);
    const endOfTheSelectedMonth = endOfMonth(activeDate);
    const startDate = startOfWeek(startOfTheSelectedMonth);
    const endDate = endOfWeek(endOfTheSelectedMonth);

    let currentDate = startDate;
    const allWeeks = [];

    while (currentDate <= endDate) {
      allWeeks.push(
        generateDatesForCurrentWeek(currentDate, selectedDate, activeDate)
      );
      currentDate = addDays(currentDate, 7);
    }

    return (
      <>
        <div>
          <div key={allWeeks.toString()} className={css.weekContainer}>
            {allWeeks}
          </div>
        </div>
      </>
    );
  };

  return (
    <section className={css.section}>
      <div className={css.block}>
        <div className={css.container}>
          <div className={css.blockinfomonth}>
            <h2 className={css.monthtitle}>Month</h2>
            <div className={css.changermonth}>
              <AiOutlineLeft
                className="navIcon"
                onClick={() => setActiveDate(subMonths(activeDate, 1))}
              />
              <span className={css.monthname}>{getHeader()}</span>
              <AiOutlineRight
                className="navIcon"
                onClick={() => setActiveDate(addMonths(activeDate, 1))}
              />
            </div>
          </div>
          <div className={css.icon}>
            <svg className={css.svg}>
              <use href={sprite + '#icon-pie-chart-02'}></use>
            </svg>
          </div>
        </div>
        <div className={css.blockdays}>{getDates()}</div>
      </div>
    </section>
  );
};

export default MonthInfo;
