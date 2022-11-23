import { formatName } from "../../utils/string";
import { PatientListItemWrapper } from "./PatientListItem.components";

const PatientListItem = ({ patient, onClick }) => {
  return (
    <PatientListItemWrapper onClick={onClick} data-testid="patient-list-item">
      {formatName(patient.resource.name)}
    </PatientListItemWrapper>
  );
};

export default PatientListItem;
