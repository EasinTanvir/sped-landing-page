"use client";
import React from "react";

import { H1 } from "..";
import { useLocale, useTranslations } from "use-intl";

const Footer = ({ brandSetting }) => {
  const t = useTranslations("navbar");

  const locale = useLocale();

  const navLinks = [
    { name: t("Home"), path: "/" },
    { name: t("Menu"), path: "/menu" },
    { name: t("Contact"), path: "/contact" },
    { name: t("About Us"), path: "/about" },
  ];

  return (
    <footer className="w-full py-10 px-4 bg-colors-bannerBgColor">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between">
        <H1 className="text-colors-heading md:text-2xl text-xl font-bold font-mono italic">
          {brandSetting?.brandTitle[locale]}
        </H1>

        <p className="text-sm text-gray-600 flex-1 text-center">
          © {new Date().getFullYear()}{" "}
          {brandSetting?.footerText[locale] || "All Right Reserved"}.
        </p>

        <nav className="flex gap-6 mt-4 sm:mt-0">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="flex items-center gap-2 text-gray-700 hover:text-black transition"
            >
              <span className="hidden italic sm:inline">{link.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
