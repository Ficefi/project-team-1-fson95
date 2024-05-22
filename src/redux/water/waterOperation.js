import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://aquatrack-api.onrender.com';

export const fetchWaterByDay = createAsyncThunk(
  'water/fetchWaterByDay',
  async ({ date }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/water/day/${date}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const addWater = createAsyncThunk(
  'water/addWater',
  async (waterData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/water', waterData);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const updateWater = createAsyncThunk(
  'water/updateWater',
  async ({ _id, ...data }, { rejectWithValue }) => {
    try {
      if (_id === undefined) {
        throw new Error('ID is undefined');
      }
      const response = await axios.put(`/water/${_id}`, data);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response ? e.response.data : e.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (_id, thunkAPI) => {
    try {
      await axios.delete(`/water/${_id}`);
      return { _id };
    } catch (er) {
      return thunkAPI.rejectWithValue(er.message);
    }
  }
);

export const fetchUserAvatar = createAsyncThunk(
  'user/fetchUserAvatar',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/avatar');
      return response.data.avatarURL;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchWaterByMonth = createAsyncThunk(
  'water/fetchWaterByMonth',
  async ({ year, month }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/water/month/${year}/${month}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);
