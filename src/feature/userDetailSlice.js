import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser } from "../api/userAction";
import { showUser } from '../api/userdataRead';
import { deleteUser } from "../api/userDelete";
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
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        // state.user = action.payload; // send the payload to user
        // state.loading = false;
        
        const {id}=action.payload;
        if(id){
          state.user=state.user.filter((ele)=>ele.id !==id)
        }
        console.log('delete payload',action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      });
  },
});

export default userDetail.reducer;
