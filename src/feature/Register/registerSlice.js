import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  username: "",
  password: "",
}

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setState(state, actions) {
      let name = actions?.payload.target.name;
      let value = actions?.payload.target.value;
      state[name] = value;
    }
  }
});

const { actions, reducer } = registerSlice;

export const { setState } = actions;
export default reducer;