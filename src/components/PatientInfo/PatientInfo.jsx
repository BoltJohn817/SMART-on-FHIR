import PatientDetailedInfo from "./PatientDetailedInfo";
import PatientConditionList from "./PatientConditionList";
import { PatientInfoWrapper } from "./PatientInfo.components";

const PatientInfo = ({ patient }) => {
  return (
    <PatientInfoWrapper>
      <PatientDetailedInfo patient={patient} />
      <PatientConditionList patientId={patient?.resource?.id} />
    </PatientInfoWrapper>
  );
};

export default PatientInfo;
