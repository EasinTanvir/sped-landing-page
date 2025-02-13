import React from "react";
import Link from "next/link";

import { Icon, H1, Container } from "../..";
import { RiTruckFill } from "../../utils/icons";
import { navLinks } from "@/utils";
import ResponsiveButton from "./ResponsiveButton";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className=" bg-transparent  py-6  absolute top-0  left-0 w-full ">
      <Container className="flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <Icon className="text-colors-heading" icon={RiTruckFill} size={35} />
          <H1 className="text-sm text-colors-heading md:text-2xl font-semibold">
            SwiftDrop
          </H1>
        </div>
        <ul className="lg:flex hidden items-center gap-12 ">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link className="text-colors-text font-medium" href={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ResponsiveButton />
        <MobileNav />
      </Container>
    </div>
  );
};

export default Navbar;
