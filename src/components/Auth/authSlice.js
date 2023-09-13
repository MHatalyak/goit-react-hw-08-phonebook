import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem('token', token);
};

export const deleteToken = () =>
  (axios.defaults.headers.common.Authorization = '');

export const loginUser = createAsyncThunk('auth/login', async user => {
  const response = await axios.post('/users/login', user);
  setToken(response.data.token);
  console.log(response.data.token);
  return response.data;
});

export const registerUser = createAsyncThunk('auth/signup', async newUser => {
  const response = await axios.post('/users/signup', newUser);
  setToken(response.data.token);
  return response.data;
});

export const logOut = createAsyncThunk(`auth/logout`, async token => {
  return await axios.post(`/users/logout`, token);
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (user, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      setToken(token);
      const response = await axios.get('/users/current', user);
      setToken(response.data.token);
      console.log(response.data.token);
      setToken(token);
      return response.data;
    } catch (error) {
      return rejectWithValue('');
    }
  }
);

const authSlice = createSlice({
  name: 'user',
  initialState: {
    user: '',
    token: null,
    isAuth: false,
    isRefreshed: false,
    error: '',
  },

  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuth = true;
        state.error = '';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isRefreshed = false;
        state.error = 'Wrong email or password';
        state.isAuth = false;
        state.token = '';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuth = true;
        state.error = '';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isRefreshed = false;
        state.error = 'Entered values are not valid, try again';
        state.isAuth = false;
        state.token = '';
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isAuth = false;
        state.error = '';
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshed = true;
        state.isAuth = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;

        state.isRefreshed = false;
        state.error = '';
      })
      .addCase(refreshUser.rejected, (state, { error, payload }) => {
        state.isRefreshed = false;
        state.error = payload ?? error.message;
        state.isAuth = false;
        state.token = '';
      });
  },
});

export const authReducer = authSlice.reducer;
