import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
// import { vi, describe, expect, it } from "vitest";

import PatientConditionList from "./PatientConditionList";

vi.mock("../../hooks/useConditions", () => {
  return {
    default: () => {
      return {
        conditions: [],
        nextPage: null,
        prevPage: null,
      };
    },
  };
});

describe("PatientConditionList", () => {
  it("Should contains SortableTable of patient condition list", () => {
    render(<PatientConditionList patientId="" />);
    expect(screen.getByTestId("patient-condition-list")).toBeInTheDocument();
  });
});
