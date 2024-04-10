"use client";
import React from "react";

const Button = ({
  onClick = () => {},
  type = "button",
  className,
  children,
}: {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 px-8 rounded-md shadow-md hover:shadow-lg hover:brightness-110 hover:scale-105 ease-in duration-100 bg-blue-500 text-white ${className}`}>
      {children}
    </button>
  );
};

export default Button;
