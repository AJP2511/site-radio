import React from "react";
import { MainContainer } from "../styles/CardInformation.styled";
import { Icard } from "../Interfaces/CardInterface";

const CardInformation = ({ titulo, informacoes, autor }: Icard) => {
  return (
    <MainContainer>
      <h3>{titulo}</h3>
      <p>{informacoes}</p>
      <p>Autor(a): {autor}</p>
    </MainContainer>
  );
};

export default CardInformation;
