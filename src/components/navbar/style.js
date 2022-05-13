import styled from "styled-components";
import bgImg from "../../assets/bg.jpg";

export const Nav = styled.div`
  width: 100vw;
  height: 500px;
  /* background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  font-size: 20px;

  span {
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      font-size: 30px;
      color: blue;
    }
  }

  select {
    font-size: 16px;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  a {
    text-decoration: none;
  }
`;

export const Countries = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Country = styled.button`
  padding: 5px 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border-radius: 5px;
`;
