import { createSlice } from "@reduxjs/toolkit";
import { CountriesData } from "../data/CountriesData";

const initialState = {
  countriesData: CountriesData,
  regions: [],
  regionPlaces: [],
  allPlaces: [],
  places: [],
  content: [],
};

console.log(CountriesData);

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
