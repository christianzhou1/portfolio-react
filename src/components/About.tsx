import Title from "./Title";
import Description from "./Description";
import Card from "./Card";
import SpotifyEmbed from "./SpotifyEmbed";
import React from "react";
interface SectionProps {
  titleContent: string;
  descContent: string;
  sectionName?: string;
}
const About = ({ titleContent, descContent, sectionName }: SectionProps) => {
  return (
    <div
      id={`about`}
      className="flex flex-col min-h-screen min-w-full items-center text-off-white z-0"
    >
      <div className="flex flex-row h-full w-[90%] border-y-2 mx-10 mb-20 px-10 border-slate-800">
        <Title content={titleContent} />
      </div>
      <Description content={descContent} />
      <div className="card-container flex flex-row justify-start items-start px-[55px] py-12 gap-6 w-[94%] h-grow bg-zinc-800 rounded-2xl shadow-lg my-10">
        <Card
          title="Computer Science Coop Level III (Class of 2026)"
          description=""
          content={
            <div>
              I'm a student at McMaster University, Hamilton, ON. I'm heading
              back to school for third year computer science in September 2024.
            </div>
          }
        />
        <Card
          title="Music"
          description=""
          width="w-[550px]"
          content={
            <div>
              Listening to music is my favorite thing to do. I plan to look into
              the Spotify API and update my Spotify top tracks here
              automatically. Meanwhile here are some hand-picked tracks:
              <SpotifyEmbed
                title="Thunder Road"
                src="https://open.spotify.com/embed/track/56lhDZNQ5J47aog6mGKeGk?utm_source=generator"
              />
              <SpotifyEmbed
                title="Sadness As A Gift"
                src="https://open.spotify.com/embed/track/1UpXhetX1s5OXTY5fRjWvu?utm_source=generator"
              />
              <SpotifyEmbed
                title="galore - french version"
                src="https://open.spotify.com/embed/track/1ifMJraYUkVtRHeDBBs1PQ?utm_source=generator"
              />
            </div>
          }
        />
        <Card
          content={
            <>
              I have been playing the piano for 10 years and completed the RCM
              Level 9 Performance Exam.
            </>
          }
          title="Piano"
          description=""
        />
        <Card
          content={
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center justify-center w-40 h-grow p-5 bg-slate-400 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-default">
                <a
                  href="https://christianzhou2004.wordpress.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              </div>
            </div>
          }
          title="WordPress Blog"
          description="I will try to update my journey in coding and more!"
        />
      </div>
    </div>
  );
};

export default About;
