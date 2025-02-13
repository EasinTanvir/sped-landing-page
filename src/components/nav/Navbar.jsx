"use client";

import React from "react";

import { Icon, H1, Container } from "../..";
import ResponsiveButton from "./ResponsiveButton";
import MobileNav from "./MobileNav";
import { RiTruckFill } from "@/utils/icons";
import { navLinks } from "@/utils";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="bg-transparent py-6 absolute top-0 left-0 w-full">
      <Container className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon className="text-colors-heading" icon={RiTruckFill} size={35} />
          <H1
            className={`text-colors-heading md:text-2xl text-xl font-semibold`}
          >
            SwiftDrop
          </H1>
        </div>
        <ul className="lg:flex hidden items-center gap-12">
          {navLinks.map((link, index) => (
            <NavLinks
              key={index}
              name={link.name}
              icon={link.icon}
              path={link.path}
            />
          ))}
        </ul>
        <ResponsiveButton />
        <MobileNav />
      </Container>
    </div>
  );
};

export default Navbar;
