"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const AreMenuTab = ({ selectedTab, onTabChange, categories }) => {
  return (
    <motion.div
      className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 pb-4 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {categories.map((tab) => (
        <motion.div
          key={tab.slug}
          variants={itemVariants}
          className={`px-4 py-2 rounded-full transition-colors duration-300 cursor-pointer text-sm sm:text-base font-medium
            ${
              selectedTab === tab.slug
                ? "bg-colors-button text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          onClick={() => onTabChange(tab.slug)}
        >
          {tab.name}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AreMenuTab;
