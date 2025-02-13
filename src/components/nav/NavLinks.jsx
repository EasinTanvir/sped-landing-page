import React from "react";
import { Icon } from "@/index";
import Link from "next/link";

const NavLinks = ({ name, path, icon }) => {
  return (
    <li className="flex items-center gap-2">
      <Icon className="text-colors-heading" icon={icon} size={20} />
      <Link className="text-colors-text font-medium  italic" href={path}>
        {name}
      </Link>
    </li>
  );
};

export default NavLinks;
