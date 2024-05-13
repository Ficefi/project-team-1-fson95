import css from './Logo.module.css';

const Logo = () => {
  return (
    <div className={css.logoContainer}>
      <a href="/" className={css.logo}>
        AQUATRACK
      </a>
    </div>
  );
};
export default Logo;
