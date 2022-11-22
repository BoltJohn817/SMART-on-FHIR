import PatientListItem from "./PatientListItem";
import PatientListPaginator from "./PatientListPaginator";
import { PatientListWrapper, PatientList } from "./PatientList.components";
import { usePatients } from "../../hooks";

export default ({ onPatientChange }) => {
  const { patients, nextPage, prevPage } = usePatients();

  return (
    <PatientListWrapper>
      <PatientList>
        {patients.map((patient) => (
          <PatientListItem
            key={patient.resource.id}
            patient={patient}
            onClick={() => onPatientChange(patient)}
          />
        ))}
      </PatientList>
      <PatientListPaginator onNext={nextPage} onPrev={prevPage} />
    </PatientListWrapper>
  );
};
