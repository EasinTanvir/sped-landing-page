import React from "react";

const Section = ({ children, className, ...rest }) => {
  return (
    <section className={`${className}`} {...rest}>
      {children}
    </section>
  );
};

export default Section;
