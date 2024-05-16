import css from './Logo.module.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className={css.logoContainer}>
      <Link to="/" className={css.logo}>
        AQUATRACK
      </Link>
    </div>
  );
};
export default Logo;
