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
          transition-all duration-[400ms] ease-in-out 
          text-offWhite px-4 py-2 rounded-xl border-2 border-transparent hover:border-offWhite hover:scale-110
        "
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className="
        transition-all duration-[400ms] ease-in-out 
        text-offWhite px-4 py-2 rounded-xl border-2 border-transparent hover:text-sinopia hover:border-sinopia hover:scale-110
      "
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
