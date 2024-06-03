import Title from "./Title";
import Description from "./Description";
import Card from "./Card";
import React from "react";
interface SectionProps {
  titleContent: string;
  descContent: string;
}
const About = ({ titleContent, descContent }: SectionProps) => {
  return (
    <div className="flex flex-col min-h-screen min-w-full items-center text-off-white">
      <div className="flex flex-row h-full w-[90%] border-y-2 mx-10 mb-20 px-10 border-slate-800">
        <Title content={titleContent} />
      </div>
      <Description content={descContent} />
      <div className="card-container flex flex-row justify-center gap-6 items-center w-11/12 h-96 bg-zinc-800 rounded-2xl shadow-lg mt-10">
        <Card title="Card Title" description="Card Description" />
        <Card title="Card Title" description="Card Description" />
        <Card title="Card Title" description="Card Description" />
        <Card title="Card Title" description="Card Description" />
      </div>
    </div>
  );
};

export default About;
