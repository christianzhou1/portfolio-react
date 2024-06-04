import Title from "./Title";
import Description from "./Description";
import Card from "./Card";
import SpotifyEmbed from "./SpotifyEmbed";
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
              Listening to music is my favorite thing to do. I plan to update my
              Spotify top tracks here. Meanwhile here are some hand-picked
              tracks:
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
          content={<>card content</>}
          title="Card Title"
          description="Card Description"
        />
        <Card
          content={<>card content</>}
          title="Card Title"
          description="Card Description"
        />
      </div>
    </div>
  );
};

export default About;
