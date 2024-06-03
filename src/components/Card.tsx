import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center w-64 h-64 bg-slate-300 rounded-lg shadow-lg hover:scale-105 transition-transform duration-700 ease-in-out cursor-default ">
      <h2 className="text-2xl font-bold text-black">{title}</h2>
      <p className="text-black">{description}</p>
    </div>
  );
};
export default Card;
