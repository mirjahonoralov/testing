import styled from "styled-components";

export const HomePageWrapper = styled.div`
  margin: 40px 0;
  display: flex;
  width: 100%;
  gap: 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 40px 0;
  img {
    width: 100%;
  }
`;

export const LeftWrapper = styled.div`
  width: 30%;
  border-right: 1px solid silver;
  padding-right: 10px;
`;

export const List = styled.ul`
  width: 100%;

  li {
    margin: 10px 0;
    padding: 5px;
    font-size: 18px;
    width: 100%;
    cursor: pointer;
    list-style: none;
    background-color: #e9e9e9;

    :hover {
      background-color: #f5f5f5;
    }
  }
`;

export const RightWrapper = styled.div`
  border-left: 1px solid silver;
  padding-left: 10px;
  width: 30%;
`;
