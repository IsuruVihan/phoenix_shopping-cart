import React from 'react';
import AscendingOrder from "../SortArrows/AscendingOrder";

const TableHeaderRow: React.FC = () => {
  return (
    <tr className="headings">
      <th className="id-column">
        <label>#</label>
      </th>
      <th className="text-center">
        <label>Item</label>
      </th>
      <th>
        <label>Name</label>
        <AscendingOrder/>
      </th>
      <th className="text-center">
        <label>Qty</label>
      </th>
      <th className="text-center">
        <label>Unit Price</label>
      </th>
      <th className="text-center">
        <label>Amount</label>
      </th>
    </tr>
  );
};

export default TableHeaderRow;