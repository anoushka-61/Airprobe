import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // User data
  isAuthenticated: false, // Authentication status
  registeredUsers: [], // List of registered users
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      // Save user data in local storage
      localStorage.setItem('user', JSON.stringify(action.payload));

      // Add the registered user to the list of registeredUsers
      state.registeredUsers.push(action.payload);

      state.user = action.payload;
      state.isAuthenticated = true;
    },
    loginUser: (state) => {
      // Check user data from local storage
      const savedUser = JSON.parse(localStorage.getItem('user'));
      if (savedUser) {
        // Deserialize the registrationDate property from timestamp to Date object
        savedUser.registrationDate = new Date(savedUser.registrationDate);
        state.user = savedUser;
        state.isAuthenticated = true;
      }
    },
    // logoutUser: (state) => {
    //   // Clear user data from local storage
    //   localStorage.removeItem('user');
    //   state.user = null;
    //   state.isAuthenticated = false;
    // },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { registerUser, loginUser, logoutUser, updateUser } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export default authSlice.reducer;
