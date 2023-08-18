import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateUser } from "./usersDataApi";
const initialState = {
    loggedInUser: null,
    status: "idle",
    error: null,
  };

  export const updateUserAsync = createAsyncThunk(
    'user/updateUser',
    async (update) => {
        const response = await (updateUser(update));
        return response
    }
  )

  export const userDataSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(updateUserAsync.pending,(state) => {
        state.status="loading"
      })
      .addCase(updateUserAsync.fulfilled,(state,action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload
      })
       
    },
  });
  

  
  export default userDataSlice.reducer;