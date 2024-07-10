import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentState: null,
  error: null,
  Loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SignInStart: (state) => {
      (state.Loading = true), (state.error = null);
    },
    SignInSuccess: (state, action) => {
      (state.currentState = action.payload),
        (state.Loading = false),
        (state.error = null);
    },
    SignInFailure: (state, action) => {
      (state.Loading = false), (state.error = action.payload);
    },
  },
});

export const { SignInStart, SignInSuccess, SignInFailure } = userSlice.actions;
export default userSlice.reducer;
