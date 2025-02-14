import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@/index";
import Link from "next/link";

const NavLinks = ({ name, path, icon }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2"
      variants={{
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <Icon className="text-colors-heading" icon={icon} size={20} />
      <Link className="text-colors-text font-medium italic" href={path}>
        {name}
      </Link>
    </motion.li>
  );
};

export default NavLinks;
