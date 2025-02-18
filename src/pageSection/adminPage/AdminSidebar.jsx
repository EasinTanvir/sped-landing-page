import { Link } from "@/i18n/routing";
import React from "react";
import { FaHome } from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <div className="fixed  top-0 min-h-screen  bg-slate-900  w-64 py-32 px-4">
      <div className="">
        <Link className="flex items-center gap-2.5 bg-colors-dashboardBg px-3 rounded-xl py-2">
          <span>
            {" "}
            <FaHome className=" text-white " size={20} />
          </span>
          <span className="text-white "> Dashboard</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
