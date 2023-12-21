import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser } from "../api/userAction";
import { showUser } from '../api/userdataRead';

// create
export const userDetail = createSlice({
  name: "userDetails",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.user = action.payload; // send the payload to user
        state.loading = false;
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      });
  },
});

export default userDetail.reducer;
