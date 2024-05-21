import axios from 'axios';
import { createSliceWithAsyncThunk } from '../../common/utils';

export const userSlice = createSliceWithAsyncThunk({
  name: 'user',
  initialState: {
    name: null,
    email: null,
    avatarURL: null,
    isLoading: false,
    error: null,
  },
  selectors: {
    name: (state) => state.name,
    email: (state) => state.email,
    avatarURL: (state) => state.avatarURL,
  },
  reducers: (create) => ({
    get: create.asyncThunk(
      async (_, { rejectWithValue }) => {
        try {
          const response = await axios.get(`/users/current`);
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
      },

      {
        pending: (state) => {
          state.isLoading = true;
        },
        rejected: (state, action) => {
          state.error = action.payload ?? action.error;
        },
        fulfilled: (state, { payload: { name, email, avatarURL } }) => {
          state.name = name;
          state.email = email;
          state.avatarURL = avatarURL;
        },
        settled: (state) => {
          state.isLoading = false;
        },
      }
    ),
  }),
});
