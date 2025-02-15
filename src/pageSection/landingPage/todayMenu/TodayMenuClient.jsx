"use client";

import React from "react";
import { motion } from "framer-motion";
import TodayMenuCard from "./TodayMenuCard";

const containerVariants = {
  hidden: { opacity: 0.2 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const TodayMenuClient = ({ todayMenuItems }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6"
    >
      {todayMenuItems.map((item, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 50 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <TodayMenuCard {...item} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TodayMenuClient;
