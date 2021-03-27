import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import { MainContainer } from "./styles/App.styled";

const App = () => {
  return (
    <MainContainer>
      <Header />
      <Content />
    </MainContainer>
  );
};

export default App;
