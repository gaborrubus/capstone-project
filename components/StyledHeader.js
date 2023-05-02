import styled, { css } from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  background-image: linear-gradient(yellow, orange);
  width: 100%;
  height: 5rem;
  font-size: 2em;
  border-top-left-radius: 50% 100%;
  border-top-right-radius: 50% 100%;
  bottom: 0;
  z-index: -1;
  height: 85%;
`;
