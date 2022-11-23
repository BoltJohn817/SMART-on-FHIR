import { fireEvent, render, screen } from "@testing-library/react";
import { assert, beforeEach, describe, expect, it } from "vitest";
import { formatName } from "../../utils/string";
import "@testing-library/jest-dom";
import SortableTable from "./SortableTable";

const mockData = [
  {
    id: "1",
    data: "value11",
    value: {
      data: "value12",
    },
  },
  {
    id: "4",
    data: "value41",
    value: {
      data: "value42",
    },
  },
  {
    id: "2",
    data: "value21",
    value: {
      data: "value22",
    },
  },
  {
    id: "3",
    data: "value31",
    value: {
      data: "value32",
    },
  },
];

const mockHeader = [
  {
    header: "Id",
    key: "id",
  },
  {
    header: "Column1",
    key: "data",
  },
  {
    header: "Column1",
    key: "value.data",
  },
];

describe("SortableTable", () => {
  // it("renders table information", () => {
  beforeEach(() => {
    render(<SortableTable data={mockData} headers={mockHeader} />);
  });

  it("should render headers", () => {
    mockHeader.forEach((header, index) => {
      expect(screen.getByTestId(`header-${index}`)).toContainHTML(
        header.header
      );
    });
  });

  it("should render items", () => {
    mockData.map((rowData, index) => {
      expect(screen.getByTestId(`cell-${index}-0`)).toContainHTML(rowData.id);
      expect(screen.getByTestId(`cell-${index}-1`)).toContainHTML(rowData.data);
      expect(screen.getByTestId(`cell-${index}-2`)).toContainHTML(
        rowData.value.data
      );
    });
  });
});
