import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const AdminLayout = ({ children }) => {

  const [collapsed, setCollapsed] = useState(false);

  const sidebarWidth = collapsed ? 95 : 290;

  return (
    <div
      className="
        flex
        min-h-screen
        bg-[#f5f5f5]
        overflow-hidden
      "
    >

      {/* SIDEBAR */}
      <div
        className="
          fixed
          left-0
          top-0
          z-50
          h-screen
          transition-all
          duration-300
        "
        style={{
          width: `${sidebarWidth}px`,
        }}
      >

        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

      </div>

      {/* MAIN SECTION */}
      <div
        className="
          flex-1
          flex
          flex-col
          min-h-screen
          transition-all
          duration-300
          mt-16
        "
        style={{
          marginLeft: `${sidebarWidth}px`,
        }}
      >

        {/* NAVBAR */}
        <div
          className="
            fixed
            top-0
            right-0
            z-40
            transition-all
            duration-300
          "
          style={{
            width: `calc(100% - ${sidebarWidth}px)`,
          }}
        >

          <Navbar />

        </div>

        {/* PAGE CONTENT */}
        <main
          className="
            flex-1
            pt-[95px]
            p-4
            sm:p-6
            lg:p-8
            overflow-y-auto
          "
        >

          {children}

        </main>

      </div>

    </div>
  );
};

export default AdminLayout;