import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setRegionPlaces,
  setSelectedRegion,
} from "../../../store/slices/mainSlice";
import { LeftWrapper, List } from "../style";

const LeftSideBar = () => {
  const { regions, allPlaces } = useSelector((state) => state.main);
  const dispatch = useDispatch();
  const func = (region) => {
    dispatch(setSelectedRegion(region.places));

    let filteredPlaces = allPlaces.filter((item) => item.where === region.name);
    dispatch(setRegionPlaces(filteredPlaces));
  };

  return (
    <LeftWrapper>
      <h2>Regions</h2>
      <List>
        {regions?.map((region, id) => (
          <li onClick={() => func(region)} key={id}>
            {region.name}
          </li>
        ))}
      </List>
    </LeftWrapper>
  );
};

export default LeftSideBar;
