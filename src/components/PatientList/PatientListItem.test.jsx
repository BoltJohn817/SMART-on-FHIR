import { fireEvent, render, screen } from "@testing-library/react";
import { assert, beforeEach, describe, expect, it } from "vitest";
import PatientListItem from "./PatientListItem";
import { formatName } from "../../utils/string";
import "@testing-library/jest-dom";

const patientMockUp = {
  resource: {
    name: [{ given: ["John"], family: ["Doe"] }],
    gender: "male",
    birthDate: "2008-04-05",
  },
};
const mockOnClick = vi.fn();

describe("PatientListItem", () => {
  it("renders patient information", () => {
    render(<PatientListItem patient={patientMockUp} />);
    expect(
      screen.getByText(`${formatName(patientMockUp.resource.name)}`)
    ).toBeInTheDocument();
  });
  it("click onClick works", () => {
    render(<PatientListItem patient={patientMockUp} onClick={mockOnClick} />);
    fireEvent.click(screen.getByTestId("patient-list-item"));
    expect(mockOnClick).toBeCalled();
  });
});
