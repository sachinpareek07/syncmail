import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Adminlogin } from "../../api/auth";

let initialState = {
  token: "",
  user: "",
  isloading: false,
};

export const loginUser = createAsyncThunk("user", async (params) => {
  console.log("params >>>", params);
  const loginData = await Adminlogin(params);
  return loginData;
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state) => {
      state.token = sessionStorage.getItem("token");
    },
    addUser: (state) => {
      state.user = sessionStorage.getItem("user");
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.isloading = true;
    },
    [loginUser.fulfilled]: (
      state,
      { payload: { email: user, stsTokenManager } }
    ) => {
      const token = stsTokenManager.accessToken;
      state.isloading = false;
      state.user = user;
      state.token = token;
      sessionStorage.setItem("token", JSON.stringify(token));
      sessionStorage.setItem("user", JSON.stringify(user));
    },
    [loginUser.rejected]: (state) => {
      state.isloading = false;
    },
  },
});

export const { addToken, addUser } = authSlice.actions;
export default authSlice.reducer;
