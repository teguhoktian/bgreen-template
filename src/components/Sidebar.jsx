import {
  faLeaf,
  faSignOut,
  faMagnifyingGlass,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import initMenus from "../data/menus.js";

function Sidebar() {
  const [menus, setMenus] = useState(initMenus);
  const [scButton, setScButton] = useState(false);
  const search = useRef("");

  const handleChange = (e) => {
    if (e.target.value) {
      setScButton(true);
      setMenus(
        menus.filter((el) => {
          return el.name.toLowerCase().includes(e.target.value.toLowerCase());
        })
      );
    } else {
      setScButton(false);
      setMenus(initMenus);
    }
  };

  const clearSearch = () => {
    search.current.value = "";
    setMenus(initMenus);
    setScButton(false);
  };

  return (
    <aside className="hidden lg:block">
      <div className="md:w-64 min-h-full border-r-2 px-2 py-2 border-gray-100 flex-col flex flex-shrink-0">
        <div className="font-semibold text-3xl items-center text-green-700 px-4 py-6">
          <FontAwesomeIcon icon={faLeaf}></FontAwesomeIcon> bGreens
        </div>

        {/* Search Menu */}
        <div className="w-full py-4 px-2 items-center flex relative">
          <input
            type="text"
            name=""
            placeholder="Find menu"
            id=""
            onChange={handleChange}
            ref={search}
            className="border-b text-sm w-full px-3 py-2 focus:outline-none focus:border-green-400"
          />

          {!scButton && (
            <FontAwesomeIcon
              className="absolute right-6 text-slate-500"
              icon={faMagnifyingGlass}
            ></FontAwesomeIcon>
          )}

          {scButton && (
            <FontAwesomeIcon
              icon={faTimes}
              className="absolute right-6 cursor-pointer text-slate-500"
              onClick={clearSearch}
            ></FontAwesomeIcon>
          )}
        </div>

        {/* Menu */}
        <div className=" flex-1 text-sm px-2 py-4 mb-6">
          <ul className="">
            {menus.map((menu, index) => (
              <li key={index} className="gap-6">
                <Link
                  to={menu.path}
                  className="py-2 px-2 text-sm font-medium block rounded hover:text-slate-900 text-slate-500"
                >
                  <FontAwesomeIcon
                    icon={menu.icon}
                    className="w-6"
                  ></FontAwesomeIcon>{" "}
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Profile */}
        <div className="text-sm">
          <div className="flex items-center space-x-2 border-b border-gray-300 py-4 mb-3">
            <img
              className="w-16 border border-green-500 p-1 rounded"
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              alt="Profile"
            />
            <div className="space-y-1">
              <h3>Hoki Teguh Oktian</h3>
              <p className="text-xs text-gray-700">Admin Kredit</p>
              <p className="text-xs text-gray-500"> 0031 - Cabang Sumber</p>
            </div>
          </div>

          {/* Logout Button */}
          <button className="py-2 px-4 border border-emerald-500 bg-emerald-700 w-full rounded text-gray-200 hover:bg-emerald-600 hover:border-emerald-600 justify-end">
            <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon> Logout
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
