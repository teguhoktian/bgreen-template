import React from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";

function NotFound() {
  const [sidebarToggle] = useOutletContext();
  return (
    <main className="h-full">
      <Navbar toggle={sidebarToggle} />

      {/* Main Content */}
      <div className="mainCard">
        <h1 className="text-xl font-semibold">Error 404 - Not Found</h1>
        <p className="mt-2">Page is not found</p>
      </div>
    </main>
  );
}

export default NotFound;
