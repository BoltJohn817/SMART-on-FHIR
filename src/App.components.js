import styled from "styled-components";

export const AppWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  padding: 2em;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.h2`
  font-size: 2em;
  font-family: monospace;
`;

export const ContentWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  overflow: scroll;

  background-color: #eee;
  border-radius: 1em;
`;
