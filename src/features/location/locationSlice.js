import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { APIURL, locationId } from "../../store/InitialValue"

const initialState = [];

export const fetchLocation = createAsyncThunk(
  `${locationId}/fetchLocation`,
  async () => {return (await fetch(`${APIURL}${locationId}/`, { mode: "cors" })).json();}
);

export const locationSlice = createSlice({
  name: locationId,
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocation.fulfilled, (state, action) => {return [...action.payload]});
  },
});

export const { setLocation } = locationSlice.actions;

export const selectLocation = (state) => state.location;

export default locationSlice.reducer;
