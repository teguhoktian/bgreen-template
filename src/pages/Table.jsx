import React, { useState } from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import UserTable from "./UserTable";

function Table() {
  const [sidebarToggle] = useOutletContext();

  const [loading] = useState(false);

  const dataHeader = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "username",
      label: "Username",
    },
    {
      key: "role",
      label: "Role",
    },
    {
      key: "action",
      label: "Aksi",
    },
  ];

  const handleDelete = () => {};
  const data = [
    {
      id: 1,
      name: "Indah Sari Devi",
      email: "mamahdedeh34@gmail.com",
      username: "indahsdev01",
      roles: [{ name: "Admin" }, { name: "Writer" }],
    },
    {
      id: 2,
      name: "Mahindra Putra",
      email: "maheend@gmail.com",
      username: "maheeend01",
      roles: [{ name: "Editor" }],
    },
    {
      id: 3,
      name: "Ujang Ilman",
      email: "ujangil03@gmail.com",
      username: "uujang44",
      roles: [{ name: "Writer" }],
    },

    {
      id: 4,
      name: "Hadi Pradhana",
      email: "hapra09@gmail.com",
      username: "hapra09",
      roles: [{ name: "Writer" }],
    },
    {
      id: 1,
      name: "Indah Sari Devi",
      email: "mamahdedeh34@gmail.com",
      username: "indahsdev01",
      roles: [{ name: "Admin" }, { name: "Writer" }],
    },
    {
      id: 2,
      name: "Mahindra Putra",
      email: "maheend@gmail.com",
      username: "maheeend01",
      roles: [{ name: "Editor" }],
    },
    {
      id: 3,
      name: "Ujang Ilman",
      email: "ujangil03@gmail.com",
      username: "uujang44",
      roles: [{ name: "Writer" }],
    },

    {
      id: 4,
      name: "Hadi Pradhana",
      email: "hapra09@gmail.com",
      username: "hapra09",
      roles: [{ name: "Writer" }],
    },
    {
      id: 4,
      name: "Hadi Pradhana",
      email: "hapra09@gmail.com",
      username: "hapra09",
      roles: [{ name: "Writer" }],
    },
  ];
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            <UserTable
              loading={loading}
              dataHeader={dataHeader}
              data={data}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Table;
