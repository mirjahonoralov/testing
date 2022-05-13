import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  regions: [],
  regionPlaces: [],
  allPlaces: [],
  places: [],
  content: {},
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setSelectedCountry(state, action) {
      state.regions = action.payload;
    },
    getAllPlaces(state, action) {
      state.allPlaces = action.payload;
    },
    setSelectedRegion(state, action) {
      state.places = action.payload;
    },
    setSelectedPlace(state, action) {
      state.content = action.payload;
    },
    setRegionPlaces(state, action) {
      state.regionPlaces = action.payload;
    },
  },
});

export const {
  setSelectedCountry,
  setSelectedRegion,
  setSelectedPlace,
  getAllPlaces,
  setRegionPlaces,
} = mainSlice.actions;

export default mainSlice.reducer;
