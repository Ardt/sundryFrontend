import { createSlice } from '@reduxjs/toolkit';

const initialState = {map: null};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setMap: (state, action) => { state.map = action.payload; }
  }
});

export const { setMap } = mapSlice.actions;

export const selectMap = (state) => state.map.value;

export default mapSlice.reducer;
