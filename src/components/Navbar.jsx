import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Navbar(props) {
  return (
    <header className="flex items-center pt-8 pb-6 px-6">
      {/* Header Nav */}
      <div className="flex-1 flex">
        <FontAwesomeIcon
          icon={props.icon}
          className="w-8 h-8 pt-1 text-green-700"
        ></FontAwesomeIcon>
        <div className="pl-4">
          <h1 className="font-semibold text-3xl">{props.title}</h1>
          <h3 className="text-sm text-gray-500">{props.subtitle}</h3>
        </div>
      </div>

      {/* Right Navigation */}
      <div className="text-sm">
        <ul className="space-x-8 flex">
          <li className="cursor-pointer font-semibold text-white bg-emerald-800 hover:bg-emerald-700 hover:border-emerald-400 rounded border py-2 px-4">
            <FontAwesomeIcon icon={faGear}></FontAwesomeIcon> Setting
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
