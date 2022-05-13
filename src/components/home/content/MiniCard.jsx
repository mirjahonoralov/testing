import React from "react";
import { MiniCardWrapper } from "./style";

const MiniCard = ({ data }) => {
  return (
    <MiniCardWrapper>
      <img src={data.img} alt="no img" />
      <main>
        <h3>{data.name}</h3>
        <p>{data.short}</p>
        <a href="#">more...</a>
      </main>
    </MiniCardWrapper>
  );
};

export default MiniCard;
