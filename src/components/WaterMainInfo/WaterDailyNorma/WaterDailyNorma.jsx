import { useState, useEffect } from 'react';
import css from './WaterDailyNorma.module.css';
import { getPersistedToken } from '/src/redux/auth/operations.js';
import { useSelector } from 'react-redux';

function WaterDailyNorma() {
  const [waterRate, setWaterRate] = useState('');
  const state = useSelector((state) => state);
  const token = getPersistedToken(state);

  useEffect(() => {
    const fetchWaterRate = async () => {
      try {
        const response = await fetch(
          'https://aquatrack-api.onrender.com/users/current',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWaterRate(data.waterRate);
      } catch (error) {
        console.error('Error fetching water rate:', error);
      }
    };

    fetchWaterRate();
  }, [token]);

  return (
    <div className={css.waterDailyNormaContainer}>
      <div className={css.waterDailyNormaText}>
        <h6 className={css.waterDailyNormaValue}>{waterRate}</h6>
        <p className={css.waterDailyNormaTitle}>My daily norma</p>
      </div>
    </div>
  );
}

export default WaterDailyNorma;
