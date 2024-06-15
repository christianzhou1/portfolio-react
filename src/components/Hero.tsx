import Menu from "./Menu";
import Description from "./Description";
import HeroBG from "./HeroBG";
import React from "react";
const Hero: React.FC = () => {
  return (
    <div>
      <iframe
        src="/embedJS/herobg.html"
        title="Hero BG"
        style={{
          position: "absolute",
          //backgroundAttachment: "fixed",
          width: "100%",
          height: "100vh",
          backgroundColor: "rgb(16, 23, 25)",
          zIndex: 0,
        }}
      />
      <div className="relative flex flex-col min-h-[60vh] min-w-full items-center text-off-white z-0 pointer-events-none">
        <h1 className=" font-light text-[6em] mt-36 mb-[25px] text-offWhite hover:scale-105 transition-transform duration-700 ease-in-out cursor-default ">
          Christian Zhou
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
    </div>
  );
};

export default Hero;
