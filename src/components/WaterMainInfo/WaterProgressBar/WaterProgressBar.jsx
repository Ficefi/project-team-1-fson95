import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import './WaterProgressBar.css';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { calculateDailyWater } from '../../WaterDetailedInfo/calculateDailyWater';
import { waters } from '../../WaterDetailedInfo/MonthInfo/MonthInfo';
import { selectWaterRate } from '../../../redux/water/selectors';

function WaterProgressBar() {
  const waterRate = useSelector(selectWaterRate);
  const progressValue = calculateDailyWater(waterRate, waters);
  useEffect(() => {
    const rangeElement = document.getElementById('range-slider');
    if (
      (86 > progressValue && progressValue > 62) ||
      (44 > progressValue && progressValue > 8)
    ) {
      rangeElement.style.setProperty('--thumb-color', '#37c342');
      rangeElement.style.setProperty('--progress-value', `'${progressValue}%'`);
    } else {
      rangeElement.style.setProperty('--thumb-color', 'rgba(0, 0, 0, 0)');
      rangeElement.style.setProperty('--progress-value', `'${progressValue}%'`);
    }
  }, [progressValue]);

  return (
    <div className="waterProgressBarContainer">
      <h2 className="waterProgressBarTitle">Today</h2>
      <div>
        <RangeSlider
          className="range-slider"
          defaultValue={[0, progressValue]}
          thumbsDisabled={[true, false]}
          rangeSlideDisabled={true}
          id="range-slider"
          disabled
        />
      </div>
      <ul className="waterProgressBarPercentages">
        <li>0%</li>
        <li>50%</li>
        <li>100%</li>
      </ul>
    </div>
  );
}

export default WaterProgressBar;
