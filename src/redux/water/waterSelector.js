import { createSelector } from '@reduxjs/toolkit';

export const selectWaterRecords = createSelector(
  (state) => state.water, // селектор, який повертає усю інформацію про воду
  (water) => {
    return water ? water.waterRecords : [];
  } // повертаємо масив записів про воду
);
export const selectIsLoading = (state) => state.water.isLoading;

export const selectError = (state) => state.water.error;
