import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PatientList from "./PatientList";

const mockPatients = [
  {
    resource: {
      id: "id0",
      name: [
        {
          given: [],
          family: [],
        },
      ],
    },
  },
  {
    resource: {
      id: "id1",
      name: [
        {
          given: [],
          family: [],
        },
      ],
    },
  },
  {
    resource: {
      id: "id2",
      name: [
        {
          given: [],
          family: [],
        },
      ],
    },
  },
  {
    resource: {
      id: "id3",
      name: [
        {
          given: [],
          family: [],
        },
      ],
    },
  },
];

vi.mock("../../hooks/usePatients", () => {
  return {
    default: () => ({
      patients: mockPatients,
      nextPage: null,
      prevPage: null,
    }),
  };
});

describe("PatientList", () => {
  it("Should render patient item list, patient list paginator", () => {
    render(<PatientList />);
    expect(screen.getByTestId("patient-item-list")).toBeInTheDocument();
    expect(screen.getByTestId("list-paginator")).toBeInTheDocument();
  });
  it("Should render number of patient item lists specified with patients", () => {
    render(<PatientList />);
    expect(screen.getAllByTestId("patient-list-item").length).toEqual(
      mockPatients.length
    );
  });
});
