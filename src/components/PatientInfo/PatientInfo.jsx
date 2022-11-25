import PatientDetailedInfo from "./PatientDetailedInfo";
import PatientConditionList from "./PatientConditionList";
import { PatientInfoWrapper } from "./PatientInfo.components";
import PropTypes from "prop-types";

const PatientInfo = ({ patient }) => {
  return (
    <PatientInfoWrapper>
      <PatientDetailedInfo patient={patient} />
      <PatientConditionList patientId={patient?.resource?.id} />
    </PatientInfoWrapper>
  );
};

PatientInfo.propTypes = {
  patient: PropTypes.object,
};

export default PatientInfo;
