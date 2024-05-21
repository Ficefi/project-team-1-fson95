//userOperation.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk(
  '/user/fetchData',
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/user/${id}`);
      const email = response.data.email;
      const emailParts = email.split('@');
      let userName = null;
      if (emailParts.length > 0) {
        userName = emailParts[0];
      }
      return { ...response.data, name: userName };
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);
