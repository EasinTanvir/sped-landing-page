"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoFastFood } from "react-icons/io5";
import { Icon, H1, Container } from "../..";
import ResponsiveButton from "./ResponsiveButton";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import LanguageSwitcher from "../LanguageSwitcher";
import { RiRestaurantFill, RiPhoneFill, BiHomeAlt } from "@/utils/icons";
import { Lobster } from "next/font/google";

export const lobster = Lobster({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin", "cyrillic", "cyrillic-ext", "latin-ext"],
});
const Navbar = ({ brandSetting }) => {
  const t = useTranslations("navbar");

  const locale = useLocale();

  const path = usePathname();
  const landingPage = path === "/";
  const adminPage = path.startsWith("/admin");

  const navLinks = [
    { name: t("Home"), path: "/", icon: BiHomeAlt },
    { name: t("Menu"), path: "/menu", icon: RiRestaurantFill },
    { name: t("About Us"), path: "/about", icon: HiOutlineUserGroup },
    { name: t("Contact"), path: "/contact", icon: RiPhoneFill },
  ];

  if (path === "/login" || path === "/register") return;

  return (
    <div
      className={` ${
        landingPage
          ? "bg-colors-bannerBgColor"
          : "bg-white  sticky top-0 shadow-md"
      } py-6 absolute top-0 left-0 w-full z-10`}
    >
      <Container
        className={`flex  items-center ${
          adminPage ? "justify-end" : "justify-between"
        }`}
      >
        {!adminPage && (
          <div className="flex items-center gap-2 ">
            <Icon
              className=" mb-1 text-colors-button"
              icon={IoFastFood}
              size={35}
            />
            <H1
              className={`text-colors-button md:text-4xl text-3xl   ${lobster.className}`}
            >
              {brandSetting?.brandTitle[locale] || "SwiftDop"}
            </H1>
          </div>
        )}

        <motion.ul
          className="lg:flex hidden items-center gap-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {navLinks.map((link, index) => (
            <NavLinks
              key={index}
              name={link.name}
              icon={link.icon}
              path={link.path}
            />
          ))}

          <LanguageSwitcher />
        </motion.ul>

        <ResponsiveButton />
        <MobileNav
          lobster={lobster}
          brandSetting={brandSetting}
          locale={locale}
        />
      </Container>
    </div>
  );
};

export default Navbar;
