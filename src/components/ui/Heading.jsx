import React from "react";

const H1 = ({ className = "", children }) => {
  return (
    <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${className}`}>
      {children}
    </h1>
  );
};

const H2 = ({ className = "", children }) => {
  return (
    <h2
      className={`text-2xl sm:text-3xl md:text-4xl font-semibold ${className}`}
    >
      {children}
    </h2>
  );
};

const H3 = ({ className = "", children }) => {
  return (
    <h3
      className={`text-xl sm:text-2xl md:text-3xl font-semibold ${className}`}
    >
      {children}
    </h3>
  );
};

const H4 = ({ className = "", children }) => {
  return (
    <h4 className={`text-lg sm:text-xl md:text-2xl font-medium ${className}`}>
      {children}
    </h4>
  );
};

const H5 = ({ className = "", children }) => {
  return (
    <h5 className={`text-base sm:text-lg md:text-xl font-medium ${className}`}>
      {children}
    </h5>
  );
};

const H6 = ({ className = "", children }) => {
  return (
    <h6 className={`text-sm sm:text-base md:text-lg font-normal ${className}`}>
      {children}
    </h6>
  );
};

export { H1, H2, H3, H4, H5, H6 };
