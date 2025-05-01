"use client";

import { usePathname } from "@/i18n/routing";
import Navbar from "./Navbar";

const NavWrapper = () => {
  const path = usePathname();

  if (path === "/login" || path === "/register") return;

  return <Navbar />;
};

export default NavWrapper;
