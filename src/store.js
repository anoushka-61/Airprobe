// store.js (or where you configure your Redux store)
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Reducer/rootreducer'; // Import your combined reducer

const store = configureStore({
  reducer: rootReducer,
});

export default store;
