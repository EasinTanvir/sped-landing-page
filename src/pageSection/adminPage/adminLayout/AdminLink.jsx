import React from "react";
import { Link, usePathname } from "@/i18n/routing";

import { Icon } from "../../..";

const AdminLink = ({ icon, name, dashBoardSideBar, href }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`flex items-center gap-2.5  px-3.5 rounded-lg py-2.5 max-h-fit overflow-hidden ${
        path === href ? "text-white bg-colors-dashboardBg" : "text-slate-100"
      }`}
    >
      <span>
        <Icon icon={icon} size={17} />
      </span>
      <span
        className={` ${
          dashBoardSideBar
            ? "opacity-100 scale-100 w-fit"
            : "opacity-0 scale-0 w-0 "
        }  transition-all duration-200 ${
          path === href ? "font-semibold" : "font-normal"
        } text-sm`}
      >
        {name}
      </span>
    </Link>
  );
};

export default AdminLink;
