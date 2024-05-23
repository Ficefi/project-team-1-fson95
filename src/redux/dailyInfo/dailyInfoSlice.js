import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  waterRecords: [],
  selectedDate: new Date().toISOString(),
};

const dailyInfoSlice = createSlice({
  name: 'dailyInfo',
  initialState,
  reducers: {
    addWaterItem(state, action) {
      state.waterRecords.push(action.payload);
    },
    deleteWaterItem(state, action) {
      state.waterRecords = state.waterRecords.filter(
        (item) => item.id !== action.payload
      );
    },
    setSelectedDate(state, action) {
      // дія для встановлення обраної дати
      state.selectedDate =
        action.payload instanceof Date
          ? action.payload.toISOString()
          : action.payload;
    },
  },
});

export const { addWaterItem, deleteWaterItem, setSelectedDate } =
  dailyInfoSlice.actions;

//селектор для обраної дати
export const selectSelectedDate = (state) => state.dailyInfo.selectedDate;

export default dailyInfoSlice.reducer;
