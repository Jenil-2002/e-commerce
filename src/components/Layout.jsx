import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

export default function Layout() {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">

    <Navbar />
      <Outlet />
      </div>

  );
}
