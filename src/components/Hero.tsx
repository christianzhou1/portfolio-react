import React from "react";
const Hero: React.FC = () => {
  return (
    <div>
      <h1 className=" font-thin text-8xl">Christian's First Website</h1>
      <p className="font-normal">
        Hi, I'm Christian Zhou. This is my first portfolio website, created May
        10, 2024 with html, css and maybe js. I'm acomputer science student with
        a passion for creating and developing software. I'm always looking for
        new opportunities to learn and grow as a developer.
      </p>
      <div className="menu">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a
          href="https://github.com/christianzhou1"
          rel="noreferrer"
          target="_blank"
        >
          Github
        </a>
        <a href="./pdf/April_22_2024_Christian_Zhou_Resume.pdf" target="blank">
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
