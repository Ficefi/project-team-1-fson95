import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';

export const createSliceWithAsyncThunk = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});
