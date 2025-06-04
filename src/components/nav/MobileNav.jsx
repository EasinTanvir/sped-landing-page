import React from "react";
import { Link } from "@/i18n/routing";

import { useTranslations } from "next-intl";

import { useGlobalContext } from "@/contextStore/GlobalContext";
import { Button, H1, Icon } from "@/index";
import {
  FaAngleRight,
  RiTruckFill,
  RiRestaurantFill,
  RiPhoneFill,
  FaUtensils,
  BiHomeAlt,
} from "@/utils/icons";
import LanguageSwitcher from "../LanguageSwitcher";
import { IoFastFoodSharp } from "react-icons/io5";

const MobileNav = ({ brandSetting, lobster, locale }) => {
  const { openNav } = useGlobalContext();

  return (
    <div
      className={` lg:hidden fixed inset-0 bg-black/40 transition-opacity duration-300 z-30 ${
        openNav ? "opacity-100   visible" : "opacity-0 invisible"
      }`}
    >
      <NavSideBar
        openNav={openNav}
        lobster={lobster}
        brandSetting={brandSetting}
        locale={locale}
      />
    </div>
  );
};

export default MobileNav;

const NavSideBar = ({ openNav, brandSetting, lobster, locale }) => {
  const t = useTranslations("navbar");

  const navLinks = [
    { name: t("Home"), path: "/", icon: BiHomeAlt },
    { name: t("Menu"), path: "/menu", icon: RiRestaurantFill },
    { name: t("Contact"), path: "/contact", icon: RiPhoneFill },
    { name: t("About Us"), path: "/about", icon: FaUtensils },
  ];
  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-white z-20 transition-all duration-300 ease-in-out
        ${openNav ? "sm:w-72 w-[70%] translate-x-0" : "w-0 -translate-x-full"}
      `}
    >
      <div
        className={`p-4  transition-opacity duration-300 ${
          openNav ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center gap-2 ">
          <Icon
            className=" mb-1 text-colors-button"
            icon={IoFastFoodSharp}
            size={35}
          />
          <H1
            className={`text-colors-button md:text-4xl text-3xl   ${lobster.className}`}
          >
            {brandSetting?.brandTitle[locale] || "SwiftDop"}
          </H1>
        </div>

        <ul className="flex flex-col  w-full mt-10 ">
          {navLinks.map((link, index) => (
            <li
              className={`flex justify-between items-center border-b py-2 min-w-full `}
              key={index}
            >
              <Link className="text-colors-text font-medium  " href={link.path}>
                {link.name}
              </Link>
              <Button className="p-2 rounded-lg">
                <Icon className="text-white" icon={FaAngleRight} size={17} />
              </Button>
            </li>
          ))}
          <div className="flex justify-end my-5">
            <LanguageSwitcher />
          </div>
        </ul>
      </div>
    </div>
  );
};
