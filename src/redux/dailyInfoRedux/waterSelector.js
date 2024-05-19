import { createSelector } from '@reduxjs/toolkit';

export const selectWaterRecords = (state) =>
  state.water ? state.water.waterRecords : [];

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
