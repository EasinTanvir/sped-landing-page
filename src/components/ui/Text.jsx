import React from "react";

const Text = ({ className = "", children }) => {
  return (
    <p className={`text-base sm:text-lg md:text-xl font-normal ${className}`}>
      {children}
    </p>
  );
};

export { Text };
