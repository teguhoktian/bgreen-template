import React from "react";
import { Link } from "react-router-dom";
import Datatables from "../components/Datatables/Table";
import TableCell from "../components/Datatables/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faRemove } from "@fortawesome/free-solid-svg-icons";

function UserTable({ loading, dataHeader, data, handleDelete }) {
  return (
    <Datatables loading={loading} dataHeader={dataHeader}>
      {data?.map((row, index) => (
        <tr
          key={index}
          className="bg-white border md:border-b block md:table-row rounded-md shadow-md md:rounded-none md:shadow-none mb-5"
        >
          <TableCell dataLabel="Name" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">
              {row.name}
            </span>
          </TableCell>
          <TableCell dataLabel="Email" showLabel={true}>
            <p className="font-normal text-sm text-gray-500">{row.email}</p>
          </TableCell>
          <TableCell dataLabel="Email" showLabel={true}>
            <p className="font-normal text-sm text-gray-500">{row.username}</p>
          </TableCell>
          <TableCell dataLabel="Role" showLabel={true}>
            <span className=" space-x-1">
              {row.roles?.map((role, index) => (
                <span
                  key={index}
                  className="rounded-full py-1 px-3 text-xs font-semibold bg-emerald-200 text-green-900"
                >
                  {role.name}
                </span>
              ))}
            </span>
          </TableCell>
          <TableCell>
            <Link
              to={`/auth/master/user/${row.id}/edit`}
              className={`text-sky-700 inline-flex py-2 px-2 rounded  text-sm`}
            >
              <FontAwesomeIcon icon={faPencil} />
            </Link>
            <Link
              onClick={(e) => {
                e.preventDefault();
                handleDelete(row.id);
              }}
              to={`/auth/master/user/${row.id}/edit`}
              className={`text-red-700 inline-flex py-2 px-2 rounded  text-sm`}
            >
              <FontAwesomeIcon icon={faRemove} />
            </Link>
          </TableCell>
        </tr>
      ))}
    </Datatables>
  );
}

export default UserTable;
