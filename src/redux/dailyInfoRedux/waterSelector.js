import { createSelector } from '@reduxjs/toolkit';

export const selectWaterRecords = createSelector(
  (state) => state.water, // селектор, який повертає усю інформацію про воду
  (water) => {
    return water ? water.waterRecords : [];
  } // повертаємо масив записів про воду
);
export const selectIsLoading = (state) => state.water.isLoading;

export const selectError = (state) => state.water.error;

export const selectVisibleWaterRecords = createSelector(
  [selectWaterRecords, (state, filter) => filter],
  (waterRecords, filter) => {
    if (!filter) {
      return waterRecords;
    }
    return waterRecords.filter((record) =>
      record.owner.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
