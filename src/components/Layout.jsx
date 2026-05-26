import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      
      {/* FIXED NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="pt-[118px] md:pt-[125px]">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />
      
    </div>
  );
}