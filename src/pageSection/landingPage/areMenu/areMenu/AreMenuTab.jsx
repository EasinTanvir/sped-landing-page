"use client";

import { motion } from "framer-motion";
import { areMenutabs } from "@/utils";
import { Icon } from "@/index";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const AreMenuTab = ({ selectedTab, onTabChange }) => {
  return (
    <motion.div
      className="flex lg:gap-20 gap-14 flex-wrap justify-center pb-4 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {areMenutabs.map((tab, index) => (
        <motion.div
          key={tab.name}
          variants={itemVariants}
          className={`flex flex-col gap-2 justify-center items-center cursor-pointer sm:text-lg text-sm font-semibold !bg-transparent ${
            selectedTab === tab.name ? "text-colors-button" : "text-gray-700"
          }`}
          onClick={() => onTabChange(tab.name)}
        >
          <Icon size={30} icon={tab.icon} />
          <span>{tab.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AreMenuTab;
