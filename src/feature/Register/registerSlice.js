import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import userAPI from "../../axios/api";

const initialState = {
  username: "",
  password: "",
  isRegistered: false,
  isLoading: false,
  errors: {},
}

const registerPost = createAsyncThunk('register/user', async data => {
    const response = await userAPI.postUser(data);
    return response;
});

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setState(state, actions) {
      let name = actions?.payload.target.name;
      let value = actions?.payload.target.value;
      state[name] = value;
    }
  },
  extraReducers: builder => {
    builder.addCase(registerPost.pending, (state, action) => {
      state.isLoading = true;
      state.isRegistered = false;
    })
    builder.addCase(registerPost.fulfilled, (state, action) => {
      state.isLoading = false;
      if(action.payload?.status >= 400)
      state.errors.err = action.payload.data;
      else {
        state.isRegistered = true;
        state.errors.success = "Register success"
        state.password = "";
        state.username = "";
      }
    })
    builder.addCase(registerPost.rejected, (state, action) => {
      state.isLoading = false;
      state.isRegistered = false;
    })
  }
});

const { actions, reducer } = registerSlice;

export { registerPost };
export const { setState } = actions;
export default reducer;