import React from "react";
import {
  MainContainer,
  CardContainer,
  ContentContainer,
} from "../styles/Content.styled";
import CardInformation from "./CardInformation";

const Content = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <CardContainer>
          <CardInformation
            titulo="Teste 1"
            informacoes="Esta página explica como a biossegurança é aplicad na radiologia"
            autor="Akemi Yagui"
          />
          <CardInformation
            titulo="Biossegurança aplicada a radiologia"
            informacoes="Esta página explica como a biossegurança é aplicad na radiologia"
            autor="Akemi Yagui"
          />
          <CardInformation
            titulo="Biossegurança aplicada a radiologia"
            informacoes="Esta página explica como a biossegurança é aplicad na radiologia"
            autor="Akemi Yagui"
          />
          <CardInformation
            titulo="Biossegurança aplicada a radiologia"
            informacoes="Esta página explica como a biossegurança é aplicad na radiologia"
            autor="Akemi Yagui"
          />
          <CardInformation
            titulo="Biossegurança aplicada a radiologia"
            informacoes="Esta página explica como a biossegurança é aplicad na radiologia"
            autor="Akemi Yagui"
          />
          <CardInformation
            titulo="Biossegurança aplicada a radiologia"
            informacoes="Esta página explica como a biossegurança é aplicad na radiologia"
            autor="Akemi Yagui"
          />
          <CardInformation
            titulo="Biossegurança aplicada a radiologia"
            informacoes="Esta página explica como a biossegurança é aplicad na radiologia"
            autor="Akemi Yagui"
          />
          <CardInformation
            titulo="Biossegurança aplicada a radiologia"
            informacoes="Esta página explica como a biossegurança é aplicad na radiologia"
            autor="Akemi Yagui"
          />
          <CardInformation
            titulo="Biossegurança aplicada a radiologia"
            informacoes="Esta página explica como a biossegurança é aplicad na radiologia"
            autor="Akemi Yagui"
          />
        </CardContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default Content;
