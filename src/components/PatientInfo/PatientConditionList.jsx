import useConditions from "../../hooks/useConditions";
import SortableTable from "../SortableTable";

const columns = [
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

  return <SortableTable data={conditions} headers={columns} />;
};

export default PatientConditionList;
