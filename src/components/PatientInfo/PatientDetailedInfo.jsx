import {
  PatientDetailedInfoWrapper,
  InfoLabel,
} from "./PatientDetailedInfo.components";
import { formatName } from "../../utils/string";

const PatientDetailedInfo = ({ patient }) => {
  return (
    <PatientDetailedInfoWrapper>
      <InfoLabel>
        Name: <b>{patient ? formatName(patient.resource.name) : null}</b>
      </InfoLabel>
      <InfoLabel>
        Gender: <b>{patient?.resource?.gender}</b>
      </InfoLabel>
      <InfoLabel>
        DOB: <b>{patient?.resource?.birthDate}</b>
      </InfoLabel>
    </PatientDetailedInfoWrapper>
  );
};

export default PatientDetailedInfo;
