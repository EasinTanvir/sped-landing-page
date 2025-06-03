"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AreMenuTab from "./AreMenuTab";
import AreMenucard from "./AreMenucard";

const AreMenuWrapper = ({ foodMenu, locale }) => {
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

      <div className="overflow-hidden ">
        <motion.div layout>
          <div className="grid sm:grid-cols-2 lg:gap-0 gap-5 space-y-3">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${selectedTab}-${item.food_id}`}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: index * 0.03,
                  }}
                >
                  <AreMenucard
                    item={item}
                    locale={locale}
                    price={item.original_price ? item.original_price : 0}
                    discountPrice={
                      item.food_price && Number(item?.discount_price || 0) !== 0
                        ? item.food_price
                        : null
                    }
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default AreMenuWrapper;
