import React from "react";
const Title = ({ content }: { content: string }) => {
  return (
    <div className="font-thin text-8xl w-full mt-20 mb-20 text-offWhite hover:scale-105 transition-transform duration-700 ease-in-out cursor-default ">
      {content}
    </div>
  );
};
export default Title;
