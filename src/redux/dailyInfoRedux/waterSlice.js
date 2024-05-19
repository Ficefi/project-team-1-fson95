//відповідає за обробку дій/actions, які змінюють стан/state у redux store

import { createSlice } from '@reduxjs/toolkit';
import {
  addWater,
  deleteWater,
  fetchWaterByDay,
  updateWater,
} from './waterOperation';

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
    //масив всіх записів
    waterRecords: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // fetchWaterByDay
      .addCase(fetchWaterByDay.pending, handlePending)
      .addCase(fetchWaterByDay.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.dailyConsumption = action.payload;
      })
      .addCase(fetchWaterByDay.rejected, handleRejected)

      //addWater
      .addCase(addWater.pending, handlePending)
      .addCase(addWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.waterRecords.concat(action.payload);
      })
      .addCase(addWater.rejected, handleRejected)

      //updateWater
      .addCase(updateWater.pending, handlePending)
      .addCase(updateWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.waterRecords = state.waterRecords.map((record) => {
          //перевірка чи співпадає id record._id з id оновленого запису action.payload._id
          record._id === action.payload._id ? action.payload : record;
        });
      })
      .addCase(updateWater.rejected, handleRejected)

      //deleteWater
      .addCase(deleteWater.pending, handlePending)
      .addCase(deleteWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.waterRecords = state.waterRecords.filter((record) => {
          record._id !== action.payload._id;
        });
      })
      .addCase(deleteWater.rejected, handleRejected);
  },
});

export const waterReducer = waterSlice.reducer;
