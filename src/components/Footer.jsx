import {
  faInstagramSquare,
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <footer className="py-3 px-6 flex items-center border-t border-gray-300 bg-gray-200 text-sm text-gray-500">
      <div className="flex-1">&copy; 2022 Rainsoft. Allright Reserved</div>
      <div className="space-x-4 text-2xl text-gray-700 cursor-pointer">
        <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
      </div>
    </footer>
  );
}

export default Footer;
