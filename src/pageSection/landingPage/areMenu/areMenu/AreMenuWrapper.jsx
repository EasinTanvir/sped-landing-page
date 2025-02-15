"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AreMenuTab from "./AreMenuTab";
import AreMenucard from "./AreMenucard";
import { menuItems } from "@/utils";

const AreMenuWrapper = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  const filteredItems =
    selectedTab === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedTab);

  return (
    <React.Fragment>
      <AreMenuTab selectedTab={selectedTab} onTabChange={setSelectedTab} />
      <div className="grid sm:grid-cols-2 lg:gap-0 gap-5 overflow-hidden">
        <AnimatePresence mode="wait">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: index * 0.04,
              }}
            >
              <AreMenucard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </React.Fragment>
  );
};

export default AreMenuWrapper;
