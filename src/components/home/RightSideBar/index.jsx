import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPlace } from "../../../store/slices/mainSlice";
import { List, RightWrapper } from "../style";

const RightSideBar = () => {
  const { places, allPlaces } = useSelector((state) => state.main);
  const dispatch = useDispatch();
  const func = (place) => {
    let sendPlaceData = allPlaces.filter((item) => item.name === place);
    dispatch(setSelectedPlace(sendPlaceData));
  };

  return (
    <RightWrapper>
      <h2>Places</h2>
      <List>
        {places?.map((place, id) => (
          <li onClick={() => func(place)} key={id}>
            {place}
          </li>
        ))}
      </List>
    </RightWrapper>
  );
};

export default RightSideBar;
