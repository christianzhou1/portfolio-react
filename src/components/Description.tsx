import React from "react";
const Description = ({ content }: { content: string }) => {
  return (
    <div className="desc hover:scale-105 p-5 mx-auto w-40em max-w-[60%] border-[1.5px] border-dutchWhite text-offWhite rounded-[20px] drop-shadow-[0_5px_5px_rgba(0,0,0,1)] transition-transform duration-700 ease-in-out cursor-default">
      {content}
    </div>
  );
};
export default Description;
