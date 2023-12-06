import React, { Children } from "react";
interface btnProps {
  children: React.ReactNode;
  className?: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, className, handleClick }: btnProps) => {
  return (
    <button
      onClick={handleClick}
      className={`${className} flex items-center justify-center w-18 lg:w-24 p-2 rounded-md`}
    >
      {children}
    </button>
  );
};

export default Button;
