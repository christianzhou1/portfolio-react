import Title from "./Title";
import Description from "./Description";
import React, { useEffect } from "react";
interface SectionProps {
  titleContent: string;
  descContent: string;
  sectionName?: string;
}
const useScript = (url: string) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

const Projects = ({ titleContent, descContent, sectionName }: SectionProps) => {
  console.log("Projects component mounted");
  useScript("/embedJS/game.js");
  return (
    <div
      id={`projects`}
      className="flex flex-col min-h-screen min-w-full items-center text-off-white"
    >
      <div className="flex flex-row h-full w-[90%] border-y-2 mx-10 mb-20 px-10 border-slate-800 ">
        <Title content={titleContent} />
      </div>
      <Description content={descContent} />
      <canvas id="canvas1" className=" h-[320px] w-[480px] my-4 bg-white">
        canvas
      </canvas>
    </div>
  );
};

export default Projects;
