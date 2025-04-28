import React from "react";

const Tooltip = ({ children, text, position = "top" }) => {
  return (
    <div className="relative flex items-center group">
      {children}
      <span
        className={`absolute z-10 hidden group-hover:flex whitespace-nowrap bg-black text-white text-xs rounded px-2 py-1 ${
          position === "top" ? "bottom-full mb-1" : "top-full mt-1"
        }`}
      >
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
