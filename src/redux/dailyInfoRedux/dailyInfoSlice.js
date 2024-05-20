import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPopoverOpen: false,
  isSettingsModalOpen: false,
  isLogOutModalOpen: false,
  isWaterModalOpen: false,
  waterRecords: [],
  selectedDate: new Date().toISOString(),
};

const dailyInfoSlice = createSlice({
  name: 'dailyInfo',
  initialState,
  reducers: {
    togglePopover(state) {
      state.isPopoverOpen = !state.isPopoverOpen;
    },
    closePopover(state) {
      state.isPopoverOpen = false;
    },
    setPopoverDimensions(state, action) {
      state.popoverDimensions = action.payload;
    },
    toggleSettingsModal(state) {
      state.isSettingsModalOpen = !state.isSettingsModalOpen;
    },
    toggleLogOutModal(state) {
      state.isLogOutModalOpen = !state.isLogOutModalOpen;
    },
    closeSettingsModal(state) {
      state.isSettingsModalOpen = false;
    },
    closeLogOutModal(state) {
      state.isLogOutModalOpen = false;
    },
    addWaterItem(state, action) {
      state.waterRecords.push(action.payload);
    },
    deleteWaterItem(state, action) {
      state.waterRecords = state.waterRecords.filter(
        (item) => item.id !== action.payload
      );
    },
    toggleWaterModal(state) {
      state.isWaterModalOpen = !state.isWaterModalOpen;
    },
    setSelectedDate(state, action) {
      // дія для встановлення обраної дати
      state.selectedDate = action.payload;
    },
  },
});

export const {
  togglePopover,
  closePopover,
  setPopoverDimensions,
  toggleSettingsModal,
  toggleLogOutModal,
  closeSettingsModal,
  closeLogOutModal,
  addWaterItem,
  deleteWaterItem,
  toggleWaterModal,
  setSelectedDate,
} = dailyInfoSlice.actions;

export const selectIsWaterModalOpen = (state) =>
  state.dailyInfo.isWaterModalOpen;

//селектор для обраної дати
export const selectSelectedDate = (state) => state.dailyInfo.selectedDate;

export default dailyInfoSlice.reducer;
