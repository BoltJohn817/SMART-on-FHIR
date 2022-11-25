import PropTypes from "prop-types";
import useConditions from "../../hooks/useConditions";
import SortableTable from "../SortableTable";

const PatientConditionColumns = [
  {
    header: "Condition",
    key: "resource.code.text",
  },
  {
    header: "Clinical Status",
    key: "resource.clinicalStatus",
  },
  {
    header: "Verification Status",
    key: "resource.verificationStatus",
  },
  {
    header: "Onset Date",
    key: "resource.onsetDateTime",
  },
];

const PatientConditionList = ({ patientId }) => {
  const { conditions } = useConditions(patientId);

  return (
    <div data-testid="patient-condition-list">
      <SortableTable data={conditions} headers={PatientConditionColumns} />
    </div>
  );
};

PatientConditionList.propTypes = {
  patientId: PropTypes.string,
};

export default PatientConditionList;
