import React from "react";

import { areMenutabs } from "@/utils";
import { Icon } from "@/index";

const AreMenuTab = ({ selectedTab, onTabChange }) => {
  return (
    <div className="flex  lg:gap-20 gap-14 flex-wrap justify-center pb-4 w-full ">
      {areMenutabs.map((tab) => (
        <div
          key={tab.name}
          className={`flex flex-col gap-2 justify-center items-center cursor-pointer  sm:text-lg text-sm font-semibold  !bg-transparent${
            selectedTab === tab.name ? " text-colors-button" : "text-gray-700"
          }`}
          onClick={() => onTabChange(tab.name)}
        >
          <Icon size={30} icon={tab.icon} />
          <span>{tab.name}</span>
        </div>
      ))}
    </div>
  );
};

export default AreMenuTab;
