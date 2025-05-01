import React from "react";
import { Link } from "@/i18n/routing";
import { FiExternalLink } from "react-icons/fi";

import BrandSettings from "./BrandSettings";
import { H3 } from "@/index";

const DashBoardPage = ({ data }) => {
  return (
    <div className="space-y-6 ">
      <BrandSettings settingData={data} />
    </div>
  );
};

export default DashBoardPage;
