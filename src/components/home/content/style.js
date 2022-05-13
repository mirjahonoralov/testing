import styled from "styled-components";

export const MiniCardWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  border-bottom: 1px solid silver;
  img {
    width: 40%;
  }
  p {
    margin: 10px 0;
  }
`;

export const BigCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  img {
    width: 70%;
  }
  h1 {
    margin: 15px 0;
  }
  p {
    margin: 10px 0;
  }
`;
