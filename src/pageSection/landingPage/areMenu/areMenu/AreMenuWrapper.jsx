"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AreMenuTab from "./AreMenuTab";
import AreMenucard from "./AreMenucard";

const AreMenuWrapper = ({ foodMenu }) => {
  const [selectedTab, setSelectedTab] = useState("All");

  // Flatten food list and attach subcategory info to each food
  const allFoods = foodMenu.flatMap((subcategory) =>
    subcategory.foods.map((food) => ({
      ...food,
      subcategory_slug: subcategory.subcategory_slug,
      subcategory_name: subcategory.subcategory_name,
    }))
  );

  const filteredItems =
    selectedTab === "All"
      ? allFoods
      : allFoods.filter((item) => item.subcategory_slug === selectedTab);

  const categories = [
    { slug: "All", name: "All" },
    ...foodMenu.map((cat) => ({
      slug: cat.subcategory_slug,
      name: cat.subcategory_name,
    })),
  ];

  return (
    <React.Fragment>
      <AreMenuTab
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        categories={categories}
      />

      <div className="grid sm:grid-cols-2 lg:gap-0 gap-5 overflow-hidden">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${selectedTab}-${item.food_id}`}
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
