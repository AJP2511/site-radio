import styled from "styled-components";
import bg from "../pictures/bg.jpg";

export const MainContainer = styled.div`
  width: 100%;
  height: calc(100vh - 17.6px);
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  border: 2px solid black;
  width: 90%;
  height: 90%;
  backdrop-filter: blur(5px);
  border-radius: 10px;
  padding: 1rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CardContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`;
