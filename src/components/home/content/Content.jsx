import React from "react";
import { useSelector } from "react-redux";
import silkRoadImg from "../../../assets/silkroad-tours.png";
import { Container } from "../../Container";
import { Wrapper } from "../style";
import MiniCard from "./MiniCard";

const Content = () => {
  const { content, regions, places, regionPlaces } = useSelector(
    (state) => state.main
  );
  console.log(places, regionPlaces);

  return (
    <Wrapper>
      <Container>
        {/* <MiniCard /> */}
        {regionPlaces.length ? (
          regionPlaces.map((place, id) => <MiniCard key={id} data={place} />)
        ) : (
          <div>
            <img src={silkRoadImg} alt="silkRoadImg" />
            <p>text</p>
          </div>
        )}
      </Container>
    </Wrapper>
  );
};

export default Content;
