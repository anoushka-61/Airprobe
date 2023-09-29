// signupSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [], // Initialize an empty array to store user data
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    SignupUser: (state, action) => {
      // Add the new user data to the users array
      state.users.push(action.payload);
      console.log('Users in state:', state.users); 
    },
  },
});

export const { SignupUser } = signupSlice.actions;
export default signupSlice.reducer;
