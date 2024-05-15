import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast'; //для відображення спливаючих повідомлень.

axios.defaults.baseURL = 'https://finalteamproject-backend.onrender.com/api';


//Дві функції використовуються для встановлення та видалення
// заголовка авторизації(Authorization) у запитах axios.setAuthHeader
// додає токен авторизації в заголовок, а clearAuthHeader < wbr > видаляє його.

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

//Реєстрація нового користувача.
//У разі успіху повертає відповідь від сервера,
// а у разі помилки відображає відповідне повідомлення.

export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/register', credentials);
      toast.success(res.data.user.message);
      return res.data;
    } catch (error) {
      toast.error(`${error.response.data.message}`);
      return thunkAPI.rejectMeaning(error.message);
    }
  }
);

//вхід користувача до системи

export const signin = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      toast.success('Welcome to the App');
      return res.data;
    } catch (error) {
      toast.error('Incorrect username or password');
      return thunkAPI.rejectMeaning(error.message);
    }
  }
);

//вихід користувача із системи
export const signout = createAsyncThunk('auth/signout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
    toast.success('Signout success');
  } catch (error) {
    toast.error('Signout error');

    return thunkAPI.rejectMeaning(error.message);
  }
});

//повторне надсилання електронного листа

export const resendMail = createAsyncThunk(
  'auth/resend',
  async (credentials, thunkAPI) => {
    try {
      await axios.post('/users/verify', credentials);
      toast.success('Mail resend');
    } catch (error) {
      toast.error('Resend error');

      return thunkAPI.rejectMeaning(error.message);
    }
  }
);

//оновлення інформації про поточного користувача

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectMeaning('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectMeaning(error.message);
    }
  }
);

