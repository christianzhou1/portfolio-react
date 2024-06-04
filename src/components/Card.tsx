import React from "react";
import { ReactElement } from "react";
interface CardProps {
  content: ReactElement;
  title: string;
  description: string;
  width?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  content,
  width = "w-[365px]",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${width} h-grow p-5 bg-slate-300 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-default `}
    >
      <h2 className="text-2xl font-bold text-black mb-3">{title}</h2>
      <p className="text-black">{description}</p>
      <div className="h-grow p-5 mt-3 bg-slate-200 w-full rounded-lg">
        {content}
      </div>
    </div>
  );
};
export default Card;
