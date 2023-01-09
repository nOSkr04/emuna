import { createSlice } from "@reduxjs/toolkit";
import { IAuth } from "../interfaces/IAuth";
import { IUser } from "../interfaces/IUser";

const initialState: IAuth = {
  user       : null,
  accessToken: null
};

const authSlice = createSlice({
  name    : "auth",
  initialState,
  reducers: {
    authLogin: (state, { payload }: { payload: IAuth }) => {
      state.accessToken = payload.accessToken;
      return state;
    },
    authLogout: (state) => {
      state.user = null;
      state.accessToken = null;
      return state;
      
    },
    authMe: (state, { payload }: { payload: IUser}) => {
      state.user = payload;
      return state;
    }
  },
});

export const authReducer = authSlice.reducer;

export const { authLogin, authMe, authLogout } = authSlice.actions;