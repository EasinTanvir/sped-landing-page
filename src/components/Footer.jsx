"use client";
import React from "react";
import Link from "next/link";
import { H1 } from "..";
import { useLocale, useTranslations } from "use-intl";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = ({ brandSetting }) => {
  const t = useTranslations("navbar");
  const locale = useLocale();

  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/speddeliveryapp",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/share/15gCvnjHoN",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      link: "https://x.com/speddelivery",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/company/speddelivery/",
    },
  ];

  return (
    <footer className="w-full py-10 px-4 bg-colors-bannerBgColor">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between gap-4">
        <H1 className="text-colors-heading md:text-2xl text-xl font-bold font-mono italic">
          {brandSetting?.brandTitle[locale]}
        </H1>

        <p className="text-sm text-gray-600 text-center">
          © {new Date().getFullYear()}{" "}
          {brandSetting?.footerText[locale] || "All Rights Reserved"}.
        </p>

        <div className="flex gap-4 mt-2 sm:mt-0">
          {socialLinks.map(({ name, icon, link }) => (
            <Link
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#BDBD34] transition-colors duration-200 text-xl"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
