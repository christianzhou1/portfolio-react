// Menu.tsx

import React from "react";
import MenuButton from "./MenuButton";

const Menu: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-filter backdrop-blur-md flex flex-row w-full md:w-35em lg:w-2/3 xl:w-95% max-w-90% mx-auto mb-[40vh] mt-10 py-6 bg-brunswickGreen bg-opacity-40 justify-around text-2xl border-2 border-russianBlue shadow-lg">
      <MenuButton href="#about"> About </MenuButton>
      <MenuButton href="#projects"> Projects </MenuButton>
      <MenuButton href="#contact"> Contact </MenuButton>
      <MenuButton href="https://github.com/christianzhou1"> Github </MenuButton>
      <MenuButton href="./pdf/April_22_2024_Christian_Zhou_Resume.pdf">
        Resume
      </MenuButton>
    </div>
  );
};

export default Menu;
