import React from 'react';
import {BiDownArrowAlt, BiUpArrowAlt} from "react-icons/bi";

const TableSortArrows = (order: string | undefined, column: any): JSX.Element | null => {
  if (!order) return (<span className="arrows">&nbsp;<BiUpArrowAlt/><BiDownArrowAlt/></span>);
  else if (order === 'asc') return (<span className="arrows asc">&nbsp;<BiUpArrowAlt/><BiDownArrowAlt/></span>);
  else if (order === 'desc') return (<span className="arrows desc">&nbsp;<BiUpArrowAlt/><BiDownArrowAlt/></span>);
  return null;
};

export default TableSortArrows;
