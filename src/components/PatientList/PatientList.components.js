import styled from "styled-components";

export const PatientListWrapper = styled.div`
  flex: 1 0 200px;

  padding: 1em;

  display: flex;
  flex-direction: column;
`;

export const PatientList = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  overflow: scroll;

  background: #ddd;

  margin-bottom: 20px;
`;
