"use client";

import React from "react";

import { useGlobalContext } from "@/contextStore/GlobalContext";

const AdminLayoutWrapper = ({ children }) => {
  const { dashBoardSideBar } = useGlobalContext();

  return (
    <div
      className={`flex-1   ${
        dashBoardSideBar ? "lg:ml-64 ml-[78px]" : "ml-[78px]"
      } transition-all duration-200 sm:p-4 p-2`}
    >
      {children}
    </div>
  );
};

export default AdminLayoutWrapper;
