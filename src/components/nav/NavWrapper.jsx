"use client";

import { usePathname } from "@/i18n/routing";
import Navbar from "./Navbar";

const NavWrapper = () => {
  const path = usePathname();

  console.log("path", path);

  if (path === "/login" || path === "/register") return;

  return <Navbar />;
};

export default NavWrapper;
