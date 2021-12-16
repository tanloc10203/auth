import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import userAPI from "../../axios/api";

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  isLogin: false,
  id_token: "",
  access_token: "",
  errors: {}
}

const loginPost = createAsyncThunk("login/user", async data => {
  const response = await userAPI.loginUser(data);
  return response;
});

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setState(state, action) {
      const value = action.payload.value;
      const name = action.payload.name;
      state[name] = value;
    },
    logout() {
      return initialState
    }
  },
  extraReducers: builder => {
    builder.addCase(loginPost.pending, (state, action) => {
      state.isLoading = true;
      state.isLogin = false;
    })
    builder.addCase(loginPost.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.status >= 400)
        state.errors.err = action.payload.data;
      else {
        state.isLogin = true;
        state.access_token = action.payload.access_token;
        state.id_token = action.payload.id_token;
        state.password = "";
        state.username = "";
      }
    })
    builder.addCase(loginPost.rejected, (state, action) => {
      state.isLoading = false;
      state.isLogin = false;
    })
  }
});

const { actions, reducer } = loginSlice;

export { loginPost };
export const { setState, logout } = actions;
export default reducer;