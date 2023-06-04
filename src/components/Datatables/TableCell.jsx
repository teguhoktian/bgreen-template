import React from "react";

function TableCell({ dataLabel, className, children, showLabel }) {
  return (
    <>
      <td
        data-label={dataLabel}
        className={
          `${
            showLabel &&
            "before:float-left before:text-sm before:font-bold before:content-[attr(data-label)] before:md:content-none text-right"
          } border-b md:text-left block md:table-cell md:whitespace-nowrap text-slate-800 md:first:pl-4 md:last:pr-4 px-3 py-2 ` +
          className
        }
      >
        {children}
      </td>
    </>
  );
}

export default TableCell;
