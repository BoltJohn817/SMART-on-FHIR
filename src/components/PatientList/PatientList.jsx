import PatientListItem from "./PatientListItem";
import PatientListPaginator from "./PatientListPaginator";
import { PatientListWrapper, PatientItemList } from "./PatientList.components";
import { usePatients } from "../../hooks";
import PropTypes from "prop-types";

const PatientList = ({ onPatientChange }) => {
  const { patients, nextPage, prevPage } = usePatients();

  return (
    <PatientListWrapper>
      <PatientItemList>
        {patients.map((patient) => (
          <PatientListItem
            key={patient.resource.id}
            patient={patient}
            onClick={() => onPatientChange(patient)}
          />
        ))}
      </PatientItemList>
      <PatientListPaginator onNext={nextPage} onPrev={prevPage} />
    </PatientListWrapper>
  );
};

PatientList.propTypes = {
  onPatientChange: PropTypes.func,
};

export default PatientList;
