import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  latitude: 0,
  longitude: 0,
};

const currentLocationReducer = createSlice({
  name: 'location',
  initialState,
  reducers: {
    locateTo: (state, action) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});

export const { locateTo } = currentLocationReducer.actions;
export default currentLocationReducer.reducer;
