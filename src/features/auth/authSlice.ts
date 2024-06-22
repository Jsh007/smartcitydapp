// import { type RootState } from '@/app/store';
import { RootState } from '@app/store';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export type TokenState = {
  token: string | undefined;
};

const initialState: TokenState = {
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  // InitialState: {token: null},
  initialState,
  reducers: {
    setCredentials(state, action: PayloadAction<{ accessToken?: string }>) {
      // Const {accessToken} = action.payload;
      // state.token = accessToken;
      state.token = action.payload.accessToken;
    },
    logOut(state, action) {
      state.token = '';
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.auth.token;
