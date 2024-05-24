import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://aquatrack-api.onrender.com';

export const addWater = createAsyncThunk(
  'water/addWater',
  async (values, thunkAPI) => {
    try {
      console.log(values);
      const response = await axios.post('/water/', values);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getWaterConsumedByDay = createAsyncThunk(
  'water/getWaterDay',
  async (waterDate, thunkAPI) => {
    try {
      const response = await axios.get(`/water/day/${waterDate}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getWaterConsumedByMonth = createAsyncThunk(
  'water/getWaterMonth',
  async (waterDate, thunkAPI) => {
    try {
      const response = await axios.get(`/water/month-stats/${waterDate}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (waterId, thunkAPI) => {
    try {
      const response = await axios.delete(`/water/${waterId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateWater = createAsyncThunk(
  'water/updateWater',
  async ({ _id, amountWater, time }, thunkAPI) => {
    try {
      const response = await axios.put(`/water/${_id}`, {
        amountWater,
        time,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
