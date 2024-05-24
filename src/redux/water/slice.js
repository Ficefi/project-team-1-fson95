import { createSlice } from '@reduxjs/toolkit';
import {
  addWater,
  getWaterConsumedByDay,
  getWaterConsumedByMonth,
  deleteWater,
  updateWater,
} from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    dayWaterConsumed: [],
    waterList: [],
    isLoading: false,
    isError: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(addWater.pending, handlePending)
      .addCase(addWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.dayWaterConsumed = action.payload;
      })
      .addCase(addWater.rejected, handleRejected)
      .addCase(getWaterConsumedByDay.pending, handlePending)
      .addCase(getWaterConsumedByDay.fulfilled, (state, action) => {
        state.isLoading = false;
        state.waterList = action.payload;
      })
      .addCase(getWaterConsumedByDay.rejected, handleRejected)
      .addCase(getWaterConsumedByMonth.pending, handlePending)
      .addCase(getWaterConsumedByMonth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dayWaterConsumed = action.payload;
      })
      .addCase(getWaterConsumedByMonth.rejected, handleRejected)
      .addCase(deleteWater.pending, handlePending)
      .addCase(deleteWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dayWaterConsumed = action.payload;
      })
      .addCase(deleteWater.rejected, handleRejected)
      .addCase(updateWater.pending, handlePending)
      .addCase(updateWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dayWaterConsumed = action.payload;
      })
      .addCase(updateWater.rejected, handleRejected),
});

export const waterReducer = waterSlice.reducer;
