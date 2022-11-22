import styled from "styled-components";

export const TableWrapper = styled.table`
  width: 100%;

  overflow: scroll;

  & thead tr th {
    border-bottom: 1px solid gray;
    cursor: pointer;
  }
  & td,
  & th {
    padding: 5px;
  }
  & tr:nth-child(odd) {
    background: lightgray;
  }
  & tr:nth-child(even) {
    background: white;
  }
`;
