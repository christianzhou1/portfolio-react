import Title from "./Title";
import Description from "./Description";
import React from "react";
interface SectionProps {
  titleContent: string;
  descContent: string;
  sectionName?: string;
}
const Section = ({ titleContent, descContent, sectionName }: SectionProps) => {
  return (
    <div
      id={`${sectionName}`}
      className="flex flex-col min-h-screen min-w-full items-center text-off-white "
    >
      <div className="flex flex-row h-full w-[90%] border-y-2 mx-10 mb-20 px-10 border-slate-800 ">
        <Title content={titleContent} />
      </div>
      <Description content={descContent} />
    </div>
  );
};

export default Section;
