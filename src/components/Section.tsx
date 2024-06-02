import Title from "./Title";
import Description from "./Description";
import React from "react";
interface SectionProps {
  titleContent: string;
  descContent: string;
}
const Section = ({ titleContent, descContent }: SectionProps) => {
  return (
    <>
      <Title content={titleContent} />
      <Description content={descContent} />
    </>
  );
};

export default Section;
