import React from "react";
const Title = ({ content }: { content: string }) => {
  return (
    <div className="font-thin text-8xl mt-44 mb-20 text-offWhite ">
      {content}
    </div>
  );
};
export default Title;
