import Menu from "./Menu";
import Description from "./Description";
import React from "react";
const Hero: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[60vh] min-w-full items-center text-off-white">
      <h1 className=" font-thin text-8xl mt-44 mb-20 text-offWhite">
        Christian's First Website
      </h1>
      {/* <p className="font-normal mt-10">
        Hi, I'm Christian Zhou. This is my first portfolio website, created May
        10, 2024 with html, css and maybe js. I'm a computer science student
        with a passion for creating and developing software. I'm always looking
        for new opportunities to learn and grow as a developer.
      </p> */}
      <Description
        content="Hi, I'm Christian Zhou. This is my portfolio website using React.js and Typescript, created June 1, 2024. I'm a computer science student
        with a passion for creating and developing software. I'm always looking
        for new opportunities to learn and grow as a developer. Cheers!!!!!"
      />
    </div>
  );
};

export default Hero;
