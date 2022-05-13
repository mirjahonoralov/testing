import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../components/Container";
import Content from "../components/home/content/Content";
import LeftSideBar from "../components/home/LeftSideBar";
import RightSideBar from "../components/home/RightSideBar";
import { HomePageWrapper } from "../components/home/style";
// import Navbar from "../components/navbar/Navbar";

const HomePage = () => {
  const { content, regions, places, regionPlaces } = useSelector(
    (state) => state.main
  );

  return (
    <Container>
      <HomePageWrapper>
        <LeftSideBar />
        <Content regionPlaces={regionPlaces} content={content} />
        <RightSideBar />
      </HomePageWrapper>
    </Container>
  );
};

export default HomePage;
