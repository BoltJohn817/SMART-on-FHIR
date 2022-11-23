import { render, screen } from "@testing-library/react";
import { assert, beforeEach, describe, expect, it } from "vitest";
import PatientDetailedInfo from "./PatientDetailedInfo";
import { formatName } from "../../utils/string";
import "@testing-library/jest-dom";

const patientMockUp = {
  resource: {
    name: [{ given: ["John"], family: ["Doe"] }],
    gender: "male",
    birthDate: "2008-04-05",
  },
};

describe("PatientDetailInfo", () => {
  it("renders patient information", () => {
    render(<PatientDetailedInfo patient={patientMockUp} />);
    expect(screen.getByTestId("name")).toContainHTML(
      `Name: <b>${formatName(patientMockUp.resource.name)}</b>`
    );
    expect(screen.getByTestId("gender")).toContainHTML(
      `Gender: <b>${patientMockUp.resource.gender}</b>`
    );
    expect(screen.getByTestId("dob")).toContainHTML(
      `DOB: <b>${patientMockUp.resource.birthDate}</b>`
    );
  });
});
