import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMarker } from "./markerAPI";

const initialState = { value: [], status: "idle" };

// The value we return becomes the `fulfilled` action payload
export const incrementAsync = createAsyncThunk(
  "marker/fetchMarker",
  async (amount) => {
    return (await fetchMarker(amount)).data;
  }
);

export const counterSlice = createSlice({
  name: "marker",
  initialState,
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      });
  },
});

// The function below is called a selector and allows us to select a value from the state.
// Selectors can also be defined inline where they're used instead of in the slice file.
// For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.marker.value;

export default counterSlice.reducer;