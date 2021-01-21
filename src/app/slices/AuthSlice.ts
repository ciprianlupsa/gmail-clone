import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

import thunkMetaInitialization from './../thunkMetaInitialization';
import { ThunkMeta } from './../../types/thunk-meta';

import firebase from 'firebase';
import {
  auth as firebaseAuth,
  googleAuthProvider,
} from '../../firebase/firebase';

interface AuthState {
  user: Partial<firebase.User> | null;
  loginStatus: ThunkMeta;
}

const initialState: AuthState = {
  user: null,
  loginStatus: { ...thunkMetaInitialization() },
};

export const login = createAsyncThunk(
  'auth/login',
  async (undefined, { rejectWithValue, getState, dispatch }) => {
    try {
      const { user } = await firebaseAuth.signInWithPopup(googleAuthProvider);

      if (user)
        dispatch(
          setUser({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
    } catch (err) {
      console.log('Error on login: ', err);
      rejectWithValue(err.message);
    }
  }
);

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<firebase.User>>) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {},
});

export const { setUser, logout } = auth.actions;

export const selectUser = (state: RootState) => state.auth.user;

export default auth.reducer;
