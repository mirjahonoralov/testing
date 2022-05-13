import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../../Container";
import { Wrapper } from "../style";
import MiniCard from "./MiniCard";
import BigCard from "./BigCard";
import { silkRoad } from "../../../store/data/CountriesData";

const Content = () => {
  const { content, regionPlaces } = useSelector((state) => state.main);

  console.log(regionPlaces);
  return (
    <Wrapper>
      <Container>
        {regionPlaces.length && !content[0] ? (
          regionPlaces.map((place, id) => <MiniCard key={id} data={place} />)
        ) : content[0]?.name.length > 0 ? (
          <BigCard data={content[0]} />
        ) : (
          <BigCard data={silkRoad} />
        )}
      </Container>
    </Wrapper>
  );
};

export default Content;
