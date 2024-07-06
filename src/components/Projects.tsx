import Title from "./Title";
import Description from "./Description";
import Card from "./Card";
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
      {/* <canvas id="canvas1" className=" h-[320px] w-[480px] my-4 bg-white">
        canvas
      </canvas> */}
      <div className="card-container flex flex-row justify-start items-start px-[55px] py-12 gap-6 w-[94%] h-grow bg-zinc-800 rounded-2xl shadow-lg my-10">
        <Card
          content={
            <>
              <div className="flex flex-col items-center justify-center w-40 h-grow p-5 bg-slate-400 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-default">
                <a
                  href="https://github.com/christianzhou1/SimpleEQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Link
                </a>
              </div>
              <div className="flex flex-row justify-start w-36 h-10 rounded-xl items-center bg-gray-300 px-2 text-center text-slate-600 text-[14px] mt-3">
                Work in Progress
              </div>
              <div className="flex flex-row justify-start w-36 h-10 rounded-xl items-center bg-gray-300 px-2 text-center text-slate-600 text-[14px] mt-3">
                C++
              </div>
              <div className="flex flex-row justify-start w-36 h-10 rounded-xl items-center bg-gray-300 px-2 text-center text-slate-600 text-[14px] mt-3">
                JUCE
              </div>
            </>
          }
          title="Simple EQ"
          description="A simple equalizer written in C++ using the JUCE framework."
        />
        <Card
          content={
            <>
              <div className="flex flex-col items-center justify-center w-40 h-grow p-5 bg-slate-400 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-default">
                <a
                  href="https://github.com/koda-git/shuttletrak"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Link
                </a>
              </div>
              <div className="flex flex-row justify-start w-36 h-10 rounded-xl items-center bg-gray-300 px-2 text-center text-slate-600 text-[14px] mt-3">
                DeltaHacks X
              </div>
              <div className="flex flex-row justify-start w-36 h-10 rounded-xl items-center bg-gray-300 px-2 text-center text-slate-600 text-[14px] mt-3">
                Flutter
              </div>
            </>
          }
          title="ShuttleTrak"
          description="A Flutter app that tracks the McMaster University shuttle bus. Built at DeltaHacks X."
        />
        <Card
          content={
            <>
              <div className="flex flex-col items-center justify-center w-40 h-grow p-5 bg-slate-400 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-default">
                <a
                  href="https://github.com/christianzhou1/CS1XC3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Link
                </a>
              </div>
              <div className="flex flex-row justify-start w-36 h-10 rounded-xl items-center bg-gray-300 px-2 text-center text-slate-600 text-[14px] mt-3">
                C
              </div>
              <div className="flex flex-row justify-start w-36 h-10 rounded-xl items-center bg-gray-300 px-2 text-center text-slate-600 text-[14px] mt-3">
                Version Control
              </div>
              <div className="flex flex-row justify-start w-36 h-10 rounded-xl items-center bg-gray-300 px-2 text-center text-slate-600 text-[14px] mt-3">
                GitHub Actions
              </div>
              <div className="flex flex-row justify-start w-36 h-10 rounded-xl items-center bg-gray-300 px-2 text-center text-slate-600 text-[14px] mt-3">
                Linux
              </div>
              <div className="flex flex-row justify-start w-36 h-10 rounded-xl items-center bg-gray-300 px-2 text-center text-slate-600 text-[14px] mt-3">
                Bash
              </div>
            </>
          }
          title="Computer Science Practice and Experience: Development Basics"
          description="C, GitHub Actions, Linux, Bash, and Version Control."
        />
      </div>
    </div>
  );
};

export default Projects;
