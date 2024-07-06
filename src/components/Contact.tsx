import Title from "./Title";
import Description from "./Description";
import Card from "./Card";
import React from "react";
interface SectionProps {
  titleContent: string;
  descContent: string;
  sectionName?: string;
}
const Section = ({ titleContent, descContent, sectionName }: SectionProps) => {
  return (
    <div
      id={`contact`}
      className="flex flex-col min-h-screen min-w-full items-center text-off-white "
    >
      <div className="flex flex-row h-full w-[90%] border-y-2 mx-10 mb-20 px-10 border-slate-800 ">
        <Title content={titleContent} />
      </div>
      {/* <Description content={descContent} /> */}
      <div className="card-container flex flex-row justify-center items-start px-[55px] py-12 gap-6 w-[94%] h-grow bg-zinc-800 rounded-2xl shadow-lg my-10">
        <Card
          width="w-[60%]"
          content={
            <div className="flex flex-col gap-3 items-center">
              <div className="flex flex-col items-center justify-center w-[80%] h-grow p-5 bg-slate-400 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-default">
                <a
                  href="mailto:christianzhiruizhou@outlook.com"
                  /* target="_blank"
                  rel="noreferrer" */
                >
                  christianzhiruizhou@outlook.com
                </a>
              </div>
              <div className="flex flex-col items-center justify-center w-[80%] h-grow p-5 bg-slate-400 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-default">
                <a
                  href="https://www.linkedin.com/in/christian-zhou-8a4b77270/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          }
          title="Get in touch!"
          description=""
        />
      </div>
    </div>
  );
};

export default Section;
