import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #ebebeb;
  width: 31%;
  display: inline-block;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  margin: 10px;

  &:hover {
    box-shadow: 0 0 4px #fb1, 0 0 8px #fb1, 0 0 12px #fb1;
  }

  h3,
  p {
    margin: 10px 0;
  }
`;
