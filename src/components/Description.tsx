import React from "react";
const Description = ({ content }: { content: string }) => {
  return (
    <>
      <p className="text-center">{content}</p>
    </>
  );
};
export default Description;
