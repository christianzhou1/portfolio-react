// MenuButton.tsx

import React, { FC, ReactNode, MouseEvent } from "react";

interface ButtonProps {
  onClick?: (
    event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>
  ) => void;
  href?: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, onClick, href }) => {
  const isExternal = href && !href.startsWith("#");

  if (href) {
    return (
      <a
        href={href}
        //onClick={onClick}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
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
