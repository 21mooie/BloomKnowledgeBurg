import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  accessToken: "",
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    SET_TOKEN: (state, action) => {
      state.accessToken = action.payload.token;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SET_TOKEN } = userSlice.actions;

export default userSlice.reducer;
