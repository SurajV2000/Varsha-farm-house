import React from "react";

const Button = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition";
  const variants = {
    default: "bg-amber-600 text-white hover:bg-amber-700",
    outline: "border border-amber-600 text-amber-600 hover:bg-amber-50",
    ghost: "text-amber-600 hover:bg-amber-100",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };