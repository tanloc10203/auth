import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import userAPI from "../../axios/api";

const initialState = {
  dataProtected: "",
  dataGet: "",
}

const getProtectedRamdom = createAsyncThunk("profile/protected/get", async token => {
  const response = await userAPI.getProtectedRamdom(token);
  return response;
});

const getRamdomQuote = createAsyncThunk("profile/get", async () => {
  const response = await userAPI.getRamdomQuote();
  return response;
});

const profileSile = createSlice({
  name: "profile",
  initialState,
  extraReducers: builder => {
    builder.addCase(getProtectedRamdom.fulfilled, (state, action) => {
      state.dataProtected = action.payload;
    });
    builder.addCase(getRamdomQuote.fulfilled, (state, action) => {
      state.dataGet = action.payload;
    });
  }
});

const { actions, reducer } = profileSile;

export { getProtectedRamdom, getRamdomQuote };
export const { setState, logout } = actions;
export default reducer;