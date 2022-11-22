import { useEffect, useState, useRef } from "react";
import { AppWrapper, Header, ContentWrapper } from "./App.components";

import "./App.css";
import { PatientList, PatientInfo } from "./components";

function App() {
  const [currentPatient, setCurrentPatient] = useState();
  return (
    <AppWrapper>
      <Header>SMART on FHIR</Header>
      <ContentWrapper>
        <PatientList onPatientChange={setCurrentPatient} />
        <PatientInfo patient={currentPatient} />
      </ContentWrapper>
    </AppWrapper>
  );
}

export default App;
