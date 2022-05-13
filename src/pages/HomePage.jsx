import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../components/Container";
import Content from "../components/home/content/Content";
import LeftSideBar from "../components/home/LeftSideBar";
import RightSideBar from "../components/home/RightSideBar";
import { HomePageWrapper } from "../components/home/style";
// import Navbar from "../components/navbar/Navbar";

const HomePage = () => {
  const data = useSelector((state) => state);

  return (
    <>
      <Container>
        <HomePageWrapper>
          <LeftSideBar />
          <Content />
          <RightSideBar />
        </HomePageWrapper>
      </Container>
    </>
  );
};

export default HomePage;
