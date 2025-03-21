import React from "react";

import { navLinks } from "@/utils";
import { H1 } from "..";

const Footer = () => {
  return (
    <footer className="w-full py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between">
        <H1 className="text-colors-heading md:text-2xl text-xl font-bold font-mono italic">
          SwiftDrop
        </H1>

        <p className="text-sm text-gray-600 flex-1 text-center">
          © {new Date().getFullYear()} SwiftDrop. All rights reserved.
        </p>

        <nav className="flex gap-6 mt-4 sm:mt-0">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="flex items-center gap-2 text-gray-700 hover:text-black transition"
            >
              <span className="hidden sm:inline">{link.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
