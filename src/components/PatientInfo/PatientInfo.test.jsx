import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
// import { describe, expect, it, vi } from "vitest";

import PatientInfo from "./PatientInfo";

const patient = {
  resource: {
    name: [],
  },
};

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

describe("PatientInfo", () => {
  it("should render PatientConditionList, PatientDetailedInfo", () => {
    render(<PatientInfo patient={patient} />);
    expect(screen.getByTestId("patient-detailed-info")).toBeInTheDocument();
    expect(screen.getByTestId("patient-condition-list")).toBeInTheDocument();
  });
});
