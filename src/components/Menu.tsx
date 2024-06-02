// Menu.tsx

import React from "react";
import MenuButton from "./MenuButton";

const Menu: React.FC = () => {
  return (
    <div className="flex flex-row w-full md:w-35em lg:w-1/2 xl:w-95% max-w-90% mx-auto mt-10 mb-10 py-2 bg-brunswick-green justify-around text-2xl border-2 border-russian-blue shadow-lg">
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
