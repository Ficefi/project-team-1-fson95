import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  userAvatarUrl: '',
  isPopoverOpen: false,
  isSettingsModalOpen: false,
  isLogOutModalOpen: false,
  isWaterModalOpen: false,
  waterRecords: [],
};

const dailyInfoSlice = createSlice({
  name: 'dailyInfo',
  initialState,
  reducers: {
    setUserName(state, action) {
      state.userName = action.payload;
    },
    setUserAvatarUrl(state, action) {
      state.userAvatarUrl = action.payload;
    },
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
  },
});

export const {
  setUserName,
  setUserAvatarUrl,
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
} = dailyInfoSlice.actions;

export const selectIsWaterModalOpen = (state) =>
  state.dailyInfo.isWaterModalOpen;

export default dailyInfoSlice.reducer;
