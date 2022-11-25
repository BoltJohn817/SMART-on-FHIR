import {
  PatientDetailedInfoWrapper,
  InfoLabel,
} from "./PatientDetailedInfo.components";
import PropTypes from "prop-types";
import { formatName } from "../../utils/string";

const PatientDetailedInfo = ({ patient }) => {
  return (
    <PatientDetailedInfoWrapper data-testid="patient-detailed-info">
      <InfoLabel data-testid="name">
        Name: <b>{patient ? formatName(patient.resource.name) : null}</b>
      </InfoLabel>
      <InfoLabel data-testid="gender">
        Gender: <b>{patient?.resource?.gender}</b>
      </InfoLabel>
      <InfoLabel data-testid="dob">
        DOB: <b>{patient?.resource?.birthDate}</b>
      </InfoLabel>
    </PatientDetailedInfoWrapper>
  );
};

PatientDetailedInfo.propTypes = {
  patient: PropTypes.object,
  resource: PropTypes.exact({
    name: {
      family_name: PropTypes.arrayOf(PropTypes.string),
      given_name: PropTypes.arrayOf(PropTypes.string),
    },
    gender: PropTypes.string,
    birthDate: PropTypes.string,
  }),
};

export default PatientDetailedInfo;
