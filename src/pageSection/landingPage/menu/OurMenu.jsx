import React from "react";

import { H2 } from "@/index";
import MenuSlider from "./MenuSlider";
import { lobster } from "@/app/(routes)/[locale]/layout";

const OurMenu = ({ menuData, locale }) => {
  const currentMenu = menuData[0];

  return (
    <div className="space-y-8">
      <H2
        className={`lg:text-6xl sm:text-5xl text-4xl font-bold italic text-center sm:!leading-[80px] !leading-[50px] ${lobster.className}  `}
      >
        {currentMenu?.menuTitle[locale]}
      </H2>

      <MenuSlider menuItems={currentMenu?.menuItems} />
    </div>
  );
};

export default OurMenu;
