import React from "react";
import { FaBicycle, FaWalking } from "react-icons/fa";

const SwtichTabs = ({
  activeTab,
  btnOneText,
  btnTwoText,
  slugOne,
  slugTwo,
  setSwitcher,
}) => {
  return (
    <div className="flex items-center   w-full">
      <div className="relative flex bg-[#EDEDEE] rounded-full w-full p-1">
        <div
          className={`absolute top-0 bottom-0 left-0 w-1/2 bg-colors-button rounded-full shadow-md transition-all duration-300 ${
            activeTab === slugTwo ? "translate-x-full" : ""
          }`}
        ></div>

        <button
          className={`relative flex-1 min-w-fit text-sm  flex items-center justify-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
            activeTab === slugOne ? "text-white" : "text-gray-500"
          }`}
          onClick={() => setSwitcher(slugOne)}
        >
          <span>
            <FaBicycle />
          </span>
          {btnOneText}{" "}
        </button>

        <button
          className={`relative flex-1 min-w-fit text-sm flex items-center justify-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
            activeTab === slugTwo ? "text-white" : "text-gray-500"
          }`}
          onClick={() => setSwitcher(slugTwo)}
        >
          <FaWalking />
          {btnTwoText}
        </button>
      </div>
    </div>
  );
};

export default SwtichTabs;
