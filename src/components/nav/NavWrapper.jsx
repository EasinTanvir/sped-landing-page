"use client";

import { usePathname } from "@/i18n/routing";
import Navbar from "./Navbar";

const NavWrapper = ({ brandSetting }) => {
  const path = usePathname();

  if (path === "/login" || path === "/register") return;

  return <Navbar brandSetting={brandSetting} />;
};

export default NavWrapper;
