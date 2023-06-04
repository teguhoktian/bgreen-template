import React from "react";
import SearchTable from "./SearchTable";

function SearchControl({ search, onHandleChange, rightComponent, ...props }) {
  return (
    <div className="md:flex justify-between items-center mb-4 space-y-2">
      <div>
        <SearchTable
          onChange={onHandleChange}
          type="search"
          value={search}
          {...props}
        ></SearchTable>
      </div>
      <div className="space-x-2">{rightComponent}</div>
    </div>
  );
}

export default SearchControl;
