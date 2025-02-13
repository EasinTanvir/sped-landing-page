import React from "react";

const Container = ({ children, className, width, ...rest }) => {
  return (
    <div
      className={` mx-auto xl:px-0 px-5   ${
        width ? width : "max-w-7xl"
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
