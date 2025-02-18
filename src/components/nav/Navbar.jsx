"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";

import { Icon, H1, Container } from "../..";
import ResponsiveButton from "./ResponsiveButton";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import LanguageSwitcher from "../LanguageSwitcher";
import {
  RiTruckFill,
  RiRestaurantFill,
  RiPhoneFill,
  FaUtensils,
  BiHomeAlt,
} from "@/utils/icons";

const Navbar = () => {
  const t = useTranslations("navbar");
  const heading = useTranslations("landingPage");
  const path = usePathname();
  const landingPage = path === "/";
  const adminPage = path.startsWith("/admin");

  const navLinks = [
    { name: t("Home"), path: "/", icon: BiHomeAlt },
    { name: t("Menu"), path: "/menu", icon: RiRestaurantFill },
    { name: t("Contact"), path: "/contact", icon: RiPhoneFill },
    { name: t("About Us"), path: "/about", icon: FaUtensils },
  ];

  return (
    <div
      className={` ${
        landingPage
          ? "bg-colors-bannerBgColor"
          : "bg-white  sticky top-0 shadow-sm"
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
              className="text-colors-heading"
              icon={RiTruckFill}
              size={35}
            />
            <H1 className="text-colors-heading md:text-2xl text-xl font-bold font-mono italic">
              {heading("title")}
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
        <MobileNav />
      </Container>
    </div>
  );
};

export default Navbar;
