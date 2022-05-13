import React from "react";
import { BigCardWrapper } from "./style";

const BigCard = ({ data }) => {
  return (
    <BigCardWrapper>
      <img src={data.img} alt="no img" />
      <h1>{data.name}</h1>
      <p>{data.short}</p>
      <p>{data.more}</p>
    </BigCardWrapper>
  );
};

export default BigCard;
