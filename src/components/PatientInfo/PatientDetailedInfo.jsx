import {
  PatientDetailedInfoWrapper,
  InfoLabel,
} from "./PatientDetailedInfo.components";
import { formatName } from "../../utils/string";

const PatientDetailedInfo = ({ patient }) => {
  return (
    <PatientDetailedInfoWrapper>
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

export default PatientDetailedInfo;
