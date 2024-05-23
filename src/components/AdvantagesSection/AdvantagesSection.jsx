import css from './AdvantagesSection.module.css';
const AdvantagesSection = () => {
  return (
    <div className={css.container}>
      <div className={css.customersContainer}>
        <ul className={css.customersAvatars}>
          <li className={css.customer}>
            <img
              src="/images/Users/user_1.webp"
              className={css.avatar}
              alt="user"
            />
          </li>
          <li className={css.customer}>
            <img
              src="/images/Users/user_2.webp"
              className={css.avatar}
              alt="user"
            />
          </li>
          <li className={css.customer}>
            <img
              src="/images/Users/user_3.webp"
              className={css.avatar}
              alt="user"
            />
          </li>
        </ul>
        <p className={css.customersText}>
          Our <span className={css.span}>happy</span> customers
        </p>
      </div>
      <div className={css.advantagesText}>
        <div className={css.firstContainer}>
          <div className={css.circle}></div>
          <p>Habit drive</p>
        </div>
        <div className={css.secondContainer}>View statistics</div>
        <div className={css.thirdContainer}>Personal rate setting</div>
      </div>
    </div>
  );
};
export default AdvantagesSection;
