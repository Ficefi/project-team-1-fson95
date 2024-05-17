import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://aquatrack-api.onrender.com';

export const addWater = createAsyncThunk(
  'userWater/addWater',
  async (values, thunkAPI) => {
    try {
      const response = await axios.post('/userWater/add', values);
      return response.data;
    } catch (er) {
      return thunkAPI.rejectWithValue(er.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'userWater/deleteWater',
  async (userWaterId, thunkAPI) => {
    try {
      const response = await axios.delete(`/userWater/delete/${userWaterId}`);
      return response.data;
    } catch (er) {
      return thunkAPI.rejectWithValue(er.message);
    }
  }
);

export const updateWater = createAsyncThunk(
  'userWater/updateWater',
  async ({ _id, amountWater, time }, thunkAPI) => {
    try {
      const response = await axios.put(`/userWater/update/${_id}`, {
        amountWater,
        time,
      });
      return response.data;
    } catch (er) {
      return thunkAPI.rejectWithValue(er.message);
    }
  }
);
