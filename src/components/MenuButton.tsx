// Button.tsx

import React, { FC, ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, onClick, href }) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          transition-transform transition-color transition-border-color duration-[400ms] ease-in-out 
          text-offWhite px-4 py-2 rounded-md border border-transparent hover:text-sinopia hover:border-sinopia hover:scale-110
        "
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className="
        transition-transform transition-color transition-border-color duration-[400ms] ease-in-out 
        text-offWhite px-4 py-2 rounded-md border border-transparent hover:text-sinopia hover:border-sinopia hover:scale-110
      "
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
