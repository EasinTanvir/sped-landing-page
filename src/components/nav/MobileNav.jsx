"use client";

import React from "react";
import { useGlobalContext } from "@/contextStore/GlobalContext";

const MobileNav = () => {
  const { openNav } = useGlobalContext();
  return (
    <div
      className={` lg:hidden fixed inset-0 bg-black/40 z-10 transition-opacity duration-300 ${
        openNav ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <NavSideBar openNav={openNav} />
    </div>
  );
};

export default MobileNav;

const NavSideBar = ({ openNav }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-white z-20 transition-all duration-300 ease-in-out
        ${openNav ? "w-72 translate-x-0" : "w-0 -translate-x-full"}
      `}
    >
      <div
        className={`p-4 transition-opacity duration-300 ${
          openNav ? "opacity-100" : "opacity-0"
        }`}
      >
        MobileNav
      </div>
    </div>
  );
};
