import { formatName } from "../../utils/string";
import { PatientListItemWrapper } from "./PatientListItem.components";
import PropTypes from "prop-types";

const PatientListItem = ({ patient, onClick }) => {
  return (
    <PatientListItemWrapper onClick={onClick} data-testid="patient-list-item">
      {formatName(patient.resource.name)}
    </PatientListItemWrapper>
  );
};

PatientListItem.propTypes = {
  patient: PropTypes.object,
  onClick: PropTypes.func,
};

export default PatientListItem;
