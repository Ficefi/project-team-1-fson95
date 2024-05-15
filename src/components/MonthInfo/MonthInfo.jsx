import { useState } from "react";
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  subMonths,
  addMonths
} from "date-fns";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import s from "./MonthInfo.module.css"
import sprite from "./sprite.svg"

const MonthInfo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
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
        >
        </div>
        <h2 className="currentMonth">{format(activeDate, "MMMM yyyy")}</h2>
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
       <div>
        <button
          className={s.btnday}
          onClick={() => {
            setSelectedDate(cloneDate);
          }}
        >
          {isSameMonth(currentDate, activeDate) ? format(currentDate, "d") : ""}
        </button>
        <p className={s.completed}>100%</p>
        </div>
      );
    } 
    currentDate = addDays(currentDate, 1);
  }
  return <>{week}</>;
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

    return (<>
      <div>
    <div className={s.weekContainer}>{allWeeks}</div>
    </div>
    </>);
  };
console.log(sprite)
  return (
    <section className={s.section}>
      <div className={s.block}>
      <div className={s.container}>
        <div className={s.blockinfomonth}>
      <h2 className={s.monthtitle}>Month</h2>
      <div className={s.changermonth}>
      <AiOutlineLeft
          className="navIcon"
          onClick={() => setActiveDate(subMonths(activeDate, 1))}
        />
              <span className={s.monthname}>{getHeader()}</span>
        <AiOutlineRight
          className="navIcon"
          onClick={() => setActiveDate(addMonths(activeDate, 1))}
        />
        </div>
        </div>
        <div className={s.icon}>
        <svg className={s.svg}>
        <use href={sprite + "#icon-pie-chart-02"}></use>
        </svg>
        </div>
        </div>
        <div className={s.blockdays}>
      {getDates()}
      </div>
      </div>
    </section>
  );
};

export default MonthInfo;