import React from "react";

const Container = ({ children, className, width, ...rest }) => {
  return (
    <div
      className={` mx-auto 2xl:px-0 lg:px-10 sm:px-20 px-5  ${
        width ? width : "max-w-7xl"
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
