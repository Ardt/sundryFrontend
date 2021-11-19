import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import mapReducer from '../features/map/mapSlice';
import markerReducer from '../features/marker/markerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    map: mapReducer,
    marker: markerReducer
  }
});
