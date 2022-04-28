import { configureStore } from '@reduxjs/toolkit';
import locationReducer from '../features/location/locationSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    location: locationReducer,
    counter: counterReducer
  }
});
