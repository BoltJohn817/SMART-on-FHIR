import { PatientListPaginatorWrapper } from "./PatientListPaginator.components";
import PropTypes from "prop-types";

const PatientListPaginator = ({ onNext, onPrev }) => {
  return (
    <PatientListPaginatorWrapper>
      <button
        onClick={onPrev}
        disabled={!onPrev}
        data-testid="prev-page-button"
      >
        Prev
      </button>
      <button
        onClick={onNext}
        disabled={!onNext}
        data-testid="next-page-button"
      >
        Next
      </button>
    </PatientListPaginatorWrapper>
  );
};

PatientListPaginator.propTypes = {
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
};

export default PatientListPaginator;
