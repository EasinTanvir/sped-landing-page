import React from "react";
import { Link } from "@/i18n/routing";
import { FiExternalLink } from "react-icons/fi";

import BrandSettings from "./BrandSettings";
import { H3 } from "@/index";

const DashBoardPage = () => {
  return (
    <div className="space-y-6 ">
      <div className="flex md:flex-row flex-col md:justify-between gap-4 md:items-center">
        <H3 className="lg:text-2xl text-lg lg:font-bold font-semibold text-gray-800">
          Dashboard Settings
        </H3>
        <Link
          className="flex items-center w-fit gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md transition-all hover:bg-blue-700 hover:scale-105"
          target="_blank"
          href="/"
        >
          View Site <FiExternalLink size={18} />
        </Link>
      </div>
      <BrandSettings />
    </div>
  );
};

export default DashBoardPage;
