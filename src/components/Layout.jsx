import React from "react";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Footer from "./Footer";
import { ApplicationContextProvider } from "../context/ApplicationContext";

function Layout({ children }) {
  return (
    <ApplicationContextProvider>
      <>
        <div className="flex min-h-screen font-Poppins">
          <Sidebar></Sidebar>
          <div className="flex flex-1 flex-col bg-slate-100">
            {children}
            <Footer></Footer>
          </div>
        </div>
      </>
    </ApplicationContextProvider>
  );
}

export default Layout;
