import { useState, useMemo } from "react";
import { TableWrapper } from "./SortableTable.components";

const compareData = (data1, data2) =>
  data1.toString().localeCompare(data2.toString());

const SortableTable = ({ data, headers }) => {
  const [sortBy, setSortBy] = useState({ headerIndex: -1, order: false });

  const sortedData = useMemo(
    () =>
      data
        .map((row) =>
          headers.map((header) =>
            header.key.split(".").reduce((result, id) => result[id], row)
          )
        )
        .sort((first, second) => {
          if (sortBy.headerIndex < 0) return false;
          return (
            (sortBy.order ? 1 : -1) *
            compareData(first[sortBy.headerIndex], second[sortBy.headerIndex])
          );
        }),
    [headers, data, sortBy]
  );

  const onClickHandler = (headerIndex) => {
    if (headerIndex === sortBy.headerIndex) {
      setSortBy({ ...sortBy, order: !sortBy.order });
    } else {
      setSortBy({ headerIndex, order: true });
    }
  };

  return (
    <TableWrapper>
      <thead>
        <tr>
          {headers.map((header, idx) => (
            <th
              key={JSON.stringify(header) + idx}
              onClick={() => onClickHandler(idx)}
              data-testid={`header-${idx}`}
            >
              {header.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, idx) => (
          <tr key={JSON.stringify(row) + idx}>
            {headers.map((header, colIdx) => (
              <td
                key={JSON.stringify(header) + colIdx}
                data-testid={`cell-${idx}-${colIdx}`}
              >
                {row[colIdx]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default SortableTable;
