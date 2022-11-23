import { fireEvent, render, screen } from "@testing-library/react";
import { assert, beforeEach, describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import PatientListPaginator from "./PatientListPaginator";

const mockNextPage = vi.fn();
const mockPrevPage = vi.fn();

describe("PatientListPaginator", () => {
  it("Should render the next and prev button", () => {
    render(
      <PatientListPaginator onNext={mockNextPage} onPrev={mockPrevPage} />
    );
    expect(screen.getByTestId("prev-page-button")).toContainHTML("Prev");
    expect(screen.getByTestId("next-page-button")).toContainHTML("Next");
  });

  it("Should next button disabled with empty nextPage function", () => {
    render(<PatientListPaginator />);
    expect(screen.getByTestId("next-page-button")).toBeDisabled();
  });

  it("Should next button enabled with nextPage function", () => {
    render(<PatientListPaginator onNext={mockNextPage} />);
    expect(screen.getByTestId("next-page-button")).toBeEnabled();
  });

  it("Should prev button disabled with empty prevPage function", () => {
    render(<PatientListPaginator />);
    expect(screen.getByTestId("prev-page-button")).toBeDisabled();
  });

  it("Should prev button enabled with prevPage function", () => {
    render(<PatientListPaginator onPrev={mockNextPage} />);
    expect(screen.getByTestId("prev-page-button")).toBeEnabled();
  });

  it("Should nextPage, prevPage works", () => {
    render(
      <PatientListPaginator onNext={mockNextPage} onPrev={mockPrevPage} />
    );

    fireEvent.click(screen.getByTestId("next-page-button"));
    expect(mockNextPage).toBeCalled();

    fireEvent.click(screen.getByTestId("prev-page-button"));
    expect(mockPrevPage).toBeCalled();
  });
});
