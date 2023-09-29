// rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './AuthReducer'; // Your authentication reducer
import signupReducer from './SignupReducer'; // Your signup reducer

const rootreducer = combineReducers({
  auth: authReducer,
  signup: signupReducer, // Include your SignupReducer here
});

export default rootreducer;
