import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  username: "",
  password: "",
}

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {}
});

const { actions, reducer } = loginSlice;

export const { } = actions;
export default reducer;