export const selectDayWaterConsumed = (state) =>
  state.userWater.dayWaterConsumed;

export const selectIsError = (state) => state.userWater.isError;

export const selectIsLoading = (state) => state.userWater.isLoading;