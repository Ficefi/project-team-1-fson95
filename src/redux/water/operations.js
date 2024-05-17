import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://aquatrack-api.onrender.com/water';

export const addWater = createAsyncThunk(
  'water/addWater',
  async (values, thunkAPI) => {
    try {
      const response = await axios.post('/', values);
      return response.data;
    } catch (er) {
      return thunkAPI.rejectWithValue(er.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (waterId, thunkAPI) => {
    try {
      const response = await axios.delete(`/${waterId}`);
      return response.data;
    } catch (er) {
      return thunkAPI.rejectWithValue(er.message);
    }
  }
);

export const updateWater = createAsyncThunk(
  'water/updateWater',
  async ({ _id, amountWater, time }, thunkAPI) => {
    try {
      const response = await axios.put(`/${_id}`, {
        amountWater,
        time,
      });
      return response.data;
    } catch (er) {
      return thunkAPI.rejectWithValue(er.message);
    }
  }
);
