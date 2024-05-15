import './WaterProgressBar.css';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
function WaterProgressBar() {
  const progressValue = '80';

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
