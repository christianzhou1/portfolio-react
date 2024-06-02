import Title from "./Title";
import Description from "./Description";
import React from "react";
interface SectionProps {
  titleContent: string;
  descContent: string;
}
const Section = ({ titleContent, descContent }: SectionProps) => {
  return (
    <div className="flex flex-col min-h-screen min-w-full items-center text-off-white border border-red-600">
      <Title content={titleContent} />
      <Description content={descContent} />
    </div>
  );
};

export default Section;
