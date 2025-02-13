const Button = ({ className, children, type = "button", ...rest }) => {
  return (
    <button
      className={`bg-colors-button text-white  ${className}`}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };
