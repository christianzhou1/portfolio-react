import React from "react";
const Title = ({ content }: { content: string }) => {
  return (
    <>
      <h1 className="text-4xl text-center">{content}</h1>
    </>
  );
};
export default Title;
