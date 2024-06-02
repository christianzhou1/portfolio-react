import React from "react";
const Description = ({ content }: { content: string }) => {
  return (
    <div className="desc hover:scale-105 p-5 mx-auto w-40em max-w-[80%] border-[1.5px] border-dutchWhite text-offWhite rounded-[15px] transition-transform duration-700 ease-in-out">
      {content}
    </div>
  );
};
export default Description;
