export function calculateDailyWater(waterRate, waters) {
    if (waterRate === 0 || waterRate === null) {
      return 0;
    }
    let waterday = (waters / waterRate) * 100;
    waterday = waterday.toFixed();
    return waterday
  }