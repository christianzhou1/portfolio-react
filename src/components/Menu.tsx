// Menu.tsx

import React from "react";
import MenuButton from "./MenuButton";

const Menu: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-filter backdrop-blur-[15px] flex flex-row w-full md:w-35em lg:w-1/2 xl:w-95% max-w-90% mx-auto mb-[40vh] mt-2 py-2 bg-brunswickGreen bg-opacity-60 justify-around text-xl border-2 border-russianBlue border-opacity-20 rounded-full shadow-custom-shadow sm:top-4">
      <MenuButton href="#about">About</MenuButton>
      <MenuButton href="#projects"> Projects </MenuButton>
      <MenuButton href="#contact"> Contact </MenuButton>
      <MenuButton href="https://github.com/christianzhou1"> Github </MenuButton>
      <MenuButton href="\pdf\July_21_2024_Christian_Zhou_Resume.pdf">
        Resume
      </MenuButton>
    </div>
  );
};

export default Menu;
