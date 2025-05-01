"use client";

import React from "react";

import { useGlobalContext } from "@/contextStore/GlobalContext";
import { Link } from "@/i18n/routing";
import { H3 } from "@/index";
import { FiExternalLink } from "react-icons/fi";

const AdminLayoutWrapper = ({ children }) => {
  const { dashBoardSideBar } = useGlobalContext();

  return (
    <div
      className={`flex-1   ${
        dashBoardSideBar ? "lg:ml-64 ml-[78px]" : "ml-[78px]"
      } transition-all duration-200 sm:p-4 p-2`}
    >
      <div>
        <div className="flex  justify-end">
          <Link
            className="flex items-center w-fit gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md transition-all hover:bg-blue-700 hover:scale-105"
            target="_blank"
            href="/"
          >
            View Site <FiExternalLink size={18} />
          </Link>
        </div>
        <div> {children}</div>
      </div>
    </div>
  );
};

export default AdminLayoutWrapper;
