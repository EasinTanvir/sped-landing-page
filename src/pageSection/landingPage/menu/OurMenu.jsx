import React from "react";

import { H2 } from "@/index";
import MenuSlider from "./MenuSlider";
import { lobster } from "@/app/layout";

const OurMenu = () => {
  return (
    <div className="space-y-8">
      <H2
        className={`lg:text-6xl sm:text-5xl text-4xl font-bold italic text-center sm:!leading-[80px] !leading-[50px] ${lobster.className} `}
      >
        Our Menu
      </H2>

      <MenuSlider />
    </div>
  );
};

export default OurMenu;
